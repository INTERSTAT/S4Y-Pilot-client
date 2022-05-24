import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';

const Value = ({ endpoint, country, isced, mun, year }) => {
	const { data, error, loading } = useFetch(endpoint, mun, country, '', '', '', year, isced);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	//const sparqlData = sparqlDataToTable(data);
	//const { columns, data: tableData } = sparqlData;

	console.log("DATA RETURNED: " + JSON.stringify(data.results.bindings[0].schools.value));
	
	return (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>
			<label>{data.results.bindings[0].schools.value}</label> 
		</div>
	</>
	);
};

export default Value;
