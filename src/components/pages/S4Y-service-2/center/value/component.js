import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';


const Value = ({ endpoint, country, mun, year, typology, lauCode }) => {
	const { data, error, loading } = useFetch(endpoint, mun, country, '', '', typology, year, '', '', lauCode );

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	//const sparqlData = sparqlDataToTable(data);
	//const { columns, data: tableData } = sparqlData;
	
	return (
	<>
		{/* <div style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}> */}
			<label style={{ marginLeft: '0.8rem',  fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem' }}>{data.results.bindings[0].schools.value}</label> 
		{/* </div> */}
	</>
	);
};

export default Value;
