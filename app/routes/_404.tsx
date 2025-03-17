import type { NotFoundHandler } from 'hono';

const handler: NotFoundHandler = (c) => {
	c.status(404);
	return c.render(
		<div
			className={
				'flex h-[calc(100vh-165px)] w-full flex-col items-center justify-center gap-8 font-montserrat'
			}
		>
			<h1 className={'font-bold text-7xl tracking-[0.7rem]'}>404</h1>
			<h2 className={'font-semibold text-4xl tracking-wide'}>Not Found</h2>
			<a
				href={'/'}
				className={
					'font-medium text-gray-400 text-lg tracking-wide underline underline-offset-2 hover:no-underline'
				}
			>
				Return to Home
			</a>
		</div>,
	);
};

export default handler;
