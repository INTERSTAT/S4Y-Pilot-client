export const extractValues = ({ data, ...rest }) => {
	if (!data) return { data, ...rest };
	const {
		results: { bindings },
	} = data;
	const reducedData = bindings.map((b) =>
		Object.entries(b).reduce(
			(acc, [k, { value }]) => ({ ...acc, [k]: value }),
			{}
		)
	);
	return { data: reducedData, ...rest };
};
