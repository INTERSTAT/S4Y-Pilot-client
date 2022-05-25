import React from 'react';
import DataTable from 'react-data-table-component';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';

const customStyles = {
	rows: {
		style: {
			minHeight: '10px',
		},
	},
	headCells: {
		style: {
			fontSize: '13px',
			fontWeight: '10',
			textTransform: 'uppercase',
			paddingLeft: '0 8px',
			backgroundColor: '#dadeed'
		},
	},
	cells: {
		style: {
			fontSize: '15px',
			paddingLeft: '0 8px',
		},
	},
};


const Table = ({ endpoint, mun, mun2, typology, year,  types, setTypes, country, isced  }) => {
	const { data, error, loading } = useFetch(endpoint, mun, country, '', mun2, typology, year, isced  );

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (
		<DataTable
			columns={columns}
			data={tableData}
			customStyles={customStyles}
			pagination
		/>
	);
};

export default Table;
