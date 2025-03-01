import type { JSX } from 'hono/jsx';
import { twMerge } from 'tailwind-merge';

type Change =
	| {
			date: string;
			type: 'RELEASE';
			title: string;
			description?: string;
			link?: string;
			tweet?: string;
	  }
	| {
			date: string;
			type: 'POST';
			link: string;
	  }
	| {
			date: string;
			type: 'PRESENTATION';
			title: string;
			link: string;
			event: {
				title: string;
				description?: string;
				link?: string;
			};
	  }
	| {
			date: string;
			type: 'GITHUB_CONTRIBUTION';
			contributons: number;
	  }
	| {
			date: string;
			type: 'OTHERS';
			title: string;
	  };

const Changes: Change[] = [];

const Changelog = () => {
	return (
		<div>
			<div
				className={
					'grid grid-cols-[1.5rem_1fr] grid-rows-[1.5rem_1fr] gap-x-4 gap-y-1 w-full'
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 36 36"
					class={'size-6'}
				>
					<title>❓</title>
					<path
						fill="#99a1af"
						d="M17 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z"
					/>
					<circle fill="#99a1af" cx="17" cy="32" r="3" />
				</svg>
				<div class={'flex items-center gap-2 w-full'}>
					<div className={'h-4 max-w-72 flex-1 rounded-full bg-gray-400'} />
					<div className={'h-3 w-8  rounded-full bg-gray-600'} />
				</div>
				<div class={'mx-auto h-full w-0.5 rounded-full bg-gray-400'} />
				<div class={'h-20 max-w-96 w-full rounded-lg bg-gray-700'} />
			</div>
		</div>
	);
};

export const Changelogs = (
	props: JSX.IntrinsicElements['div'] & {
		class?: string;
	},
) => {
	return (
		<div {...props} class={twMerge('flex flex-col gap-4', props.class)}>
			<Changelog />
			<Changelog />
		</div>
	);
};
