import build from '@hono/vite-build/cloudflare-workers';
import adapter from '@hono/vite-dev-server/cloudflare';
import mdxjs from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import honox from 'honox/vite';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import { remarkMdxReadingTime } from './utils/remarkMdxReadingTime';

export default defineConfig({
	plugins: [
		honox({ devServer: { adapter }, client: { input: ['./app/style.css'] } }),
		build(),
		tailwindcss(),
		mdxjs({
			jsxImportSource: 'hono/jsx',
			remarkPlugins: [
				remarkFrontmatter,
				remarkMdxFrontmatter,
				remarkMdxReadingTime,
			],
			elementAttributeNameCase: 'react',
			providerImportSource: '/app/components/MDXComponents/MDXComponents.tsx',
		}),
	],
});
