module.exports = {
	use: [
		'@usertech/neutrino-preset-eslint-prettier',
		[
			'@neutrinojs/library',
			{
				name: '@usertech/apollo-client-utils',
			},
		],
		[
			'@neutrinojs/copy',
			{
				patterns: [{ from: 'src/*.d.ts', flatten: true }],
			},
		],
		'@usertech/neutrino-preset-graphql',
	],
};
