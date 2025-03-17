import type { UseMdxComponents } from '@mdx-js/mdx';
import { twMerge } from 'tailwind-merge';
import { AnchorLink } from './AnchorLink';
import { getAnchorId, getAnchorTitle } from './AnchorUtil';

export const useMDXComponents: UseMdxComponents = () => {
	return {
		h1: ({ children, id, className, ...props }) => {
			return (
				<h1
					{...props}
					className={twMerge(
						'group relative mt-10 mb-6 border-t border-t-gray-200 pt-8 font-bold text-4xl dark:border-t-gray-800',
						className,
					)}
					id={id ?? getAnchorId(children)}
				>
					{children}
					<AnchorLink
						anchorId={getAnchorId(children)}
						anchorTitle={getAnchorTitle(children)}
					/>
				</h1>
			);
		},
		h2: ({ children, id, className, ...props }) => {
			return (
				<h2
					{...props}
					className={twMerge(
						'group relative mt-10 mb-6 border-t border-t-gray-200 pt-8 font-bold text-2xl dark:border-t-gray-800',
						className,
					)}
					id={id ?? getAnchorId(children)}
				>
					{children}
					<AnchorLink
						anchorId={getAnchorId(children)}
						anchorTitle={getAnchorTitle(children)}
					/>
				</h2>
			);
		},
		h3: ({ children, id, className, ...props }) => {
			return (
				<h3
					{...props}
					className={twMerge(
						'group relative mt-10 mb-6 border-t border-t-gray-200 pt-8 font-bold text-xl dark:border-t-gray-800',
						className,
					)}
					id={id ?? getAnchorId(children)}
				>
					{children}
					<AnchorLink
						anchorId={getAnchorId(children)}
						anchorTitle={getAnchorTitle(children)}
					/>
				</h3>
			);
		},
		h4: ({ children, id, className, ...props }) => {
			return (
				<h4
					{...props}
					className={twMerge(
						'group relative mt-10 mb-6 border-t border-t-gray-200 pt-8 font-bold text-lg dark:border-t-gray-800',
						className,
					)}
					id={id ?? getAnchorId(children)}
				>
					{children}
					<AnchorLink
						anchorId={getAnchorId(children)}
						anchorTitle={getAnchorTitle(children)}
					/>
				</h4>
			);
		},
		p: ({ children, className, ...props }) => {
			return (
				<p {...props} className={twMerge('my-4', className)}>
					{children}
				</p>
			);
		},
		code: ({ children, className, ...props }) => {
			return (
				<code
					{...props}
					className={twMerge(
						'mx-0.5 rounded-lg bg-white/10 px-1.5 py-1 text-red-400 text-sm',
						className,
					)}
				>
					{children}
				</code>
			);
		},
		a: ({ children, className, ...props }) => {
			return (
				<a
					{...props}
					className={twMerge(
						' font-semibold text-(--post-key-color) underline underline-offset-2 hover:no-underline hover:opacity-90',
						className,
					)}
				>
					{children}
				</a>
			);
		},
		ul: ({ children, className, ...props }) => {
			return (
				<ul {...props} className={twMerge('list-disc pl-6', className)}>
					{children}
				</ul>
			);
		},
		ol: ({ children, className, ...props }) => {
			return (
				<ol {...props} className={twMerge('list-decimal pl-6', className)}>
					{children}
				</ol>
			);
		},
		li: ({ children, className, ...props }) => {
			return (
				<li {...props} className={twMerge('my-1', className)}>
					{children}
				</li>
			);
		},
	};
};
