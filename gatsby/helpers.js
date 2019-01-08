/* eslint-env node */

const concat = (strings, ...exps) =>
	typeof strings === 'string'
		? strings
		: exps.reduce((str, exp, i) => `${str}${exp}${strings[i + 1]}`, strings[0])

exports.createQuery = name => (..._query) => async graphql => {
	const query = concat(..._query)
	const {data, errors} = await graphql(`query ${name}Query { ${query} }`)
	if (!errors || !errors.length) return data
	errors.forEach(e => console.error(e.toString())) // eslint-disable-line
	throw errors
}
