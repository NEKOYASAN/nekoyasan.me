import { valueToEstree } from 'estree-util-value-to-estree';
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

import type { Plugin } from 'unified';

export const remarkMdxReadingTime: Plugin = () => (tree) => {
	const text = toString(tree);
	const readingTime = getReadingTime(text);

	// @ts-ignore
	tree.children.unshift({
		type: 'mdxjsEsm',
		value: '',
		data: {
			estree: {
				type: 'Program',
				sourceType: 'module',
				body: [
					{
						type: 'ExportNamedDeclaration',
						specifiers: [],
						declaration: {
							type: 'VariableDeclaration',
							kind: 'const',
							declarations: [
								{
									type: 'VariableDeclarator',
									id: { type: 'Identifier', name: 'readingTime' },
									init: valueToEstree(readingTime, {
										preserveReferences: true,
									}),
								},
							],
						},
					},
				],
			},
		},
	});
};
