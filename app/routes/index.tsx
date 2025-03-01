import { createRoute } from 'honox/factory';
import { Changelogs } from '../components/Changelogs';
import type { Frontmatter } from '../global';

export default createRoute((c) => {
	const posts = import.meta.glob<{
		frontmatter: Frontmatter;
	}>('./posts/*.mdx', {
		eager: true,
	});
	return c.render(
		<div class={'mt-20 w-full'}>
			<div class={'flex items-center gap-6 leading-relaxed'}>
				<img
					src={'/icon.png'}
					width={'100px'}
					height={'100px'}
					alt={'NEKOYASAN Icon'}
					class={'size-20 rounded-full'}
				/>
				<div>
					<h1 class={'font-bold text-4xl'}>ɴᴇᴋᴏʏᴀsᴀɴ</h1>
					<p class={'font-medium font-montserrat text-gray-400'}>
						Frontend Engineer
					</p>
				</div>
			</div>
			<div class={'mt-8 font-medium font-montserrat leading-loose'}>
				<h2 class={'font-semibold text-2xl text-gray-300'}>
					From the Virtual World, for you.
				</h2>
				<p class={' text-gray-400'}>
					I'm frontend engineer. I love TypeScript, React and CSS!
				</p>
				<div class={'relative inline-block'}>
					<p
						class={
							'cursor-not-allowed select-none text-gray-600 line-through opacity-40'
						}
					>
						About me →
					</p>
					<p
						class={'absolute top-0 w-full text-center text-gray-400 opacity-70'}
					>
						🚧 WIP
					</p>
				</div>
			</div>
			<div className={'my-10'}>
				<h3 class={'font-medium font-montserrat text-2xl text-gray-300'}>
					Posts
				</h3>

				<div className={'relative mt-4 font-montserrat'}>
					<div
						className={
							'flex flex-col items-start gap-4 font-montserrat opacity-20'
						}
					>
						<div className={'group flex items-center gap-4'}>
							<div
								className={
									'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-gray-400 transition-[outline]'
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36 36"
									className={'h-full w-full'}
								>
									<title>❓</title>
									<path
										fill="#99a1af"
										d="M17 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z"
									/>
									<circle fill="#99a1af" cx="17" cy="32" r="3" />
								</svg>
							</div>
							<div className={'flex flex-col gap-2'}>
								<div className={'h-4 max-w-72 w-[50vw] rounded-full bg-gray-400'} />
								<div className={'h-3 max-w-20 w-[20vw] rounded-full bg-gray-600'} />
							</div>
						</div>
						<div className={'group flex items-center gap-4'}>
							<div
								className={
									'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-gray-400 transition-[outline]'
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36 36"
									className={'h-full w-full'}
								>
									<title>❓</title>
									<path
										fill="#99a1af"
										d="M17 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z"
									/>
									<circle fill="#99a1af" cx="17" cy="32" r="3" />
								</svg>
							</div>
							<div className={'flex flex-col gap-2'}>
								<div className={'h-4 max-w-96 w-[62vw] rounded-full bg-gray-400'} />
								<div className={'h-3 max-w-20 w-[20vw] rounded-full bg-gray-600'} />
							</div>
						</div>
						<div className={'group flex items-center gap-4'}>
							<div
								className={
									'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-gray-400 transition-[outline]'
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 36 36"
									className={'h-full w-full'}
								>
									<title>❓</title>
									<path
										fill="#99a1af"
										d="M17 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z"
									/>
									<circle fill="#99a1af" cx="17" cy="32" r="3" />
								</svg>
							</div>
							<div className={'flex flex-col gap-2'}>
								<div className={'h-4 max-w-42 w-[42vw] rounded-full bg-gray-400'} />
								<div className={'h-3 max-w-20 w-[20vw] rounded-full bg-gray-600'} />
							</div>
						</div>
						{/*Object.entries(posts).map(([path, { frontmatter }]) => {
						return (
							<a
								key={path.replace(/\.mdx$/, '')}
								href={path.replace(/\.mdx$/, '')}
								className={'group flex items-center gap-4'}
							>
								<div
									className={
										'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-[#3EA8FF] transition-[outline] group-hover:outline-2'
									}
									style={`outline-color: ${frontmatter.color}`}
								>
									<img
										src={`/twemoji/${frontmatter.emoji}.svg`}
										alt={frontmatter.emoji}
										width={'40px'}
										height={'40px'}
										class={'h-full w-full'}
									/>
								</div>
								<div>
									<p className={'font-medium text-xl'}>{frontmatter.title}</p>
									<time
										className={'text-gray-400 text-sm tracking-wide'}
										datetime={frontmatter.publishedAt}
									>
										{format(frontmatter.publishedAt, 'yyyy/MM/dd')}
									</time>
								</div>
							</a>
						);
					})*/}
					</div>

					<div
						className={
							'absolute inset-0 font-semibold text-gray-400 opacity-70'
						}
					>
						<div
							className={
								'-translate-y-1/2 absolute top-1/2 left-1/9 rotate-12 text-2xl'
							}
						>
							🚧 Under construction...
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3 class={'font-medium font-montserrat text-2xl text-gray-300'}>
					Changelogs
				</h3>
				<div className={'relative mt-4 font-montserrat'}>
					<Changelogs class={'opacity-20'} />

					<div
						className={
							'absolute inset-0 font-semibold text-gray-400 opacity-70'
						}
					>
						<div
							className={
								'-translate-y-1/2 absolute top-1/2 left-1/9 rotate-12 text-2xl'
							}
						>
							🚧 Under construction...
						</div>
					</div>
				</div>
			</div>
			<div className={'my-10 font-montserrat'}>
				<h3 class={'font-medium text-2xl text-gray-300'}>Socials</h3>
				<div className={'mt-4 flex flex-col items-start gap-4'}>
					<a
						href={'https://github.com/NEKOYASAN'}
						target={'_blank'}
						rel={'noopener noreferrer'}
						class={'group flex items-center gap-4'}
					>
						<div
							className={
								'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-[#ffffff] transition-[outline] group-hover:outline-2'
							}
						>
							<svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
								<title>GitHub</title>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
									fill="#fff"
								/>
							</svg>
						</div>
						<div>
							<p class={'font-medium text-xl'}>GitHub</p>
							<p class={'text-gray-400 text-sm'}>NEKOYASAN</p>
						</div>
					</a>
					<a
						href={'https://x.com/Nekoya3_'}
						target={'_blank'}
						rel={'noopener noreferrer'}
						class={'group flex items-center gap-4'}
					>
						<div
							className={
								'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-[#1d9bf0] transition-[outline] group-hover:outline-2'
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 248 204"
							>
								<title>Twitter</title>
								<path
									fill="#1d9bf0"
									d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
								/>
							</svg>
						</div>
						<div>
							<p class={'font-medium text-xl'}>Twitter</p>
							<p class={'text-gray-400 text-sm'}>Nekoya3_</p>
						</div>
					</a>
					<a
						href={'https://zenn.dev/nekoya3'}
						target={'_blank'}
						rel={'noopener noreferrer'}
						class={'group flex items-center gap-4'}
					>
						<div
							className={
								'flex size-18 items-center justify-center rounded-2xl bg-white/10 p-4 outline outline-[#3EA8FF] transition-[outline] group-hover:outline-2'
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 88.3 88.3"
							>
								<title>Zenn</title>
								<path
									fill="#3EA8FF"
									d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9
		C2.8,82.5,3.2,83.3,3.9,83.3z"
								/>
								<path
									fill="#3EA8FF"
									d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1
		h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
								/>
							</svg>
						</div>
						<div>
							<p class={'font-medium text-xl'}>Zenn</p>
							<p class={'text-gray-400 text-sm'}>nekoya3</p>
						</div>
					</a>
				</div>
			</div>
		</div>,
	);
});
