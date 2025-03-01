import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';

export default jsxRenderer(({ children }) => {
	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
});
