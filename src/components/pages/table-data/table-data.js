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
			fontSize: '15px',
			fontWeight: '10',
			textTransform: 'uppercase',
			paddingLeft: '0 8px',
		},
	},
	cells: {
		style: {
			fontSize: '10px',
			paddingLeft: '0 8px',
		},
	},
};

const Table = ({ endpoint }) => {
	const { data, error, loading } = useFetch(endpoint);

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
