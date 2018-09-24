module.exports = {
	use: [
		'@usertech/neutrino-preset-eslint-prettier',
		[
			'@neutrinojs/library',
			{
				name: '@usertech/apollo-client-utils',
			},
		],
	],
};
