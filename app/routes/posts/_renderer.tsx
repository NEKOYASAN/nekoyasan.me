import { format } from 'date-fns';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';

export default jsxRenderer(({ children, frontmatter, readingTime }) => {
	if (!frontmatter || !readingTime) {
		return (
			<html lang="ja">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>nekoyasan</title>
					<link rel="icon" href="/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
						rel="stylesheet"
					/>
					<Link href="/app/style.css" rel="stylesheet" />
					<Script src="/app/client.ts" async />
				</head>
				<body class={'bg-gray-900 text-gray-200'}>
					<div class={'mx-auto max-w-3xl px-4 sm:px-6'}>{children}</div>
					<footer
						class={
							'my-8 text-center font-medium font-montserrat text-gray-400 text-sm'
						}
					>
						<p>&copy; {new Date().getFullYear()} nekoyasan</p>
					</footer>
				</body>
			</html>
		);
	}
	return (
		<html lang="ja" class={'scroll-pt-16'}>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{frontmatter?.title ?? 'posts'} | nekoyasan</title>
				<link
					rel="icon"
					href={
						frontmatter?.emoji
							? `/twemoji/${frontmatter.emoji}.png`
							: '/favicon.ico'
					}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<Link href="/app/style.css" rel="stylesheet" />
				<Script src="/app/client.ts" async />
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charSet="utf-8"
				/>
			</head>
			<body class={'bg-gray-900 text-gray-200'}>
				<header class={'sticky top-0 z-50 w-full bg-gray-900 py-6'}>
					<div
						className={
							'mx-auto flex max-w-3xl items-center gap-2 px-4 font-semibold sm:px-6'
						}
					>
						<a href={'/'} className={'flex items-center gap-2'}>
							<img
								src={'/icon.png'}
								width={'30px'}
								height={'30px'}
								alt={'NEKOYASAN Icon'}
								className={'size-8 rounded-full'}
							/>
							<p>ɴᴇᴋᴏʏᴀsᴀɴ</p>
						</a>
						<div className={'text-gray-600'}>/</div>
						<div>Posts</div>
						<div className={'text-gray-600'}>/</div>
						<div>{frontmatter.navLabel}</div>
					</div>
				</header>
				<div class={'mt-16 mb-8 flex w-full flex-col items-center gap-8'}>
					<img
						src={`/twemoji/${frontmatter.emoji}.svg`}
						alt={frontmatter.emoji}
						width={'80px'}
						height={'80px'}
						className={'size-20'}
					/>

					<h1 class={'font-montserrat font-semibold text-3xl'}>
						{frontmatter.title}
					</h1>
					<div
						class={
							'flex items-center justify-center text-center text-gray-400 text-sm'
						}
					>
						<time datetime={frontmatter.publishedAt}>
							{format(frontmatter.publishedAt, 'yyyy/MM/dd')}
						</time>
						<p>・</p>
						<p>{readingTime.text}</p>
					</div>
					<hr
						class={'h-1 w-10 border-none'}
						style={`background-color: ${frontmatter.color}`}
					/>
				</div>
				<div class={'mx-auto my-16 max-w-3xl px-4 font-mixed sm:px-6'}>
					{children}
				</div>
				<footer
					class={
						'my-8 text-center font-medium font-montserrat text-gray-400 text-sm'
					}
				>
					<p>&copy; {new Date().getFullYear()} nekoyasan</p>
				</footer>
			</body>
		</html>
	);
});
