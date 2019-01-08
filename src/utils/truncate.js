const truncate = (string, length = 120) =>
	string.length < length ? string : `${string.slice(0, length)}…`

export default truncate
