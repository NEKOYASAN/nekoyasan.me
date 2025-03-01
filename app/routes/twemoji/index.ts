import { Hono } from 'hono';
import { cache } from 'hono/cache';
import { parse } from './lib/parse';

const app = new Hono();

app.get(
	'*',
	cache({
		cacheName: 'twemoji',
		cacheControl: 'max-age=31536000',
	}),
);

function decodeText(raw: string): null | string {
	try {
		return decodeURIComponent(raw);
	} catch {
		return null;
	}
}

const getFirstTwemojiUrl = (
	text: string,
	ext: 'svg' | 'png',
): string | null => {
	const entities = parse(text, {
		assetType: ext,
	});
	return entities.length === 0 ? null : entities[0].url;
};

app.get('/:emoji', async (c) => {
	const emojiWithExt = c.req.param('emoji');
	const ext = emojiWithExt.split('.').pop();
	const emoji = emojiWithExt.split('.').shift();

	if (ext !== 'png' && ext !== 'svg') {
		c.status(400);
		return c.text('Invalid extension');
	}

	if (!emoji) {
		c.status(400);
		return c.text('Invalid emoji');
	}

	const targetText = decodeText(emoji);
	if (!targetText) {
		c.status(500);
		return c.text('Failed to decode URL');
	}

	const twemojiURL = getFirstTwemojiUrl(targetText, ext);

	if (!twemojiURL) {
		c.status(404);
		return c.text('No emoji found');
	}

	const res = await fetch(twemojiURL);
	return new Response(res.body, {
		status: res.status,
		statusText: res.statusText,
		headers: {
			'Content-Type': res.headers.get('Content-Type') || '',
			'x-content-type-options': 'nosniff',
			'Cache-Control': 'public, max-age=31536000, s-maxage=31536000',
		},
	});
});

export default app;
