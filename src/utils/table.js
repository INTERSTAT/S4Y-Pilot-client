export const sparqlDataToTable = (res) => {
	const {
		head: { vars },
		results: { bindings },
	} = res;
	const columns = vars.map((v) => ({
		selector: (row) => row[v],
		name: v.charAt(0).toUpperCase() + v.slice(1),
		sortable: true,
	}));
	const data = bindings.map((b) =>
		Object.entries(b).reduce(
			(acc, [k, { value }]) => ({ ...acc, [k]: value }),
			{}
		)
	);
	console.log('DATA:');
	console.log(data);
	return { columns, data };
};
