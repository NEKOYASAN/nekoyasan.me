import { twMerge } from 'tailwind-merge';

type AnchorLinkProps = {
	anchorId?: string | null;
	anchorTitle?: string | null;
	className?: string;
};

export const AnchorLink = ({
	anchorId,
	anchorTitle,
	className,
}: AnchorLinkProps) => {
	if (!anchorId || !anchorTitle) {
		return null;
	}
	return (
		<a
			href={`#${anchorId}`}
			aria-label={`Permalink to ${anchorTitle}`}
			className={twMerge(
				'-ml-5 absolute bottom-0 left-0 mr-0.5 w-1 select-none pr-0.5 font-semibold text-[#3EA8FF] opacity-0 transition-opacity group-hover:opacity-100',
				className,
			)}
		>
			#
		</a>
	);
};
