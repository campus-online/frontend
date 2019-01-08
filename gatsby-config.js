/* eslint-env node */
module.exports = {
	mapping: {
		'MarkdownRemark.frontmatter.authors': 'MarkdownRemark.fields.author_id',
		'MarkdownRemark.frontmatter.editorial': 'MarkdownRemark.fields.editorial_id',
		'MarkdownRemark.fields.posts': 'MarkdownRemark',
	},
	plugins: [
		'gatsby-plugin-netlify-cache',
		'gatsby-plugin-lodash',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#29d',
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|cache|public)/,
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-source-git',
			options: {
				name: 'campus-online-content',
				remote: 'https://github.com/campus-online/content.git',
				branch: 'master',
				// articles needs to be processed after others,
				// keep it last in the array
				patterns: ['docs/authors/*.md','docs/editorials/*.md', 'docs/articles/*.md'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-null-image-alt',
					{
						resolve: 'gatsby-remark-figure-caption',
						options: {
							figureClassName: 'md-figure',
							captionClassName: 'md-figure-caption',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 760,
							showCaptions: true,
						},
					},
					'gatsby-remark-external-links',
					'gatsby-remark-responsive-iframe',
				],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-campus-post',
		{
			resolve: 'gatsby-custom-netlify-cms-alias',
			options: {
				package: '@leonardodino/netlify-cms',
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/admin`,
			},
		},
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
}
