const flatten = arr =>
	arr.reduce(
		(acc, val) =>
			Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
		[],
	)

export default flatten
