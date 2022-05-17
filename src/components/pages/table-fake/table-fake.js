import React from 'react';
import Grid from '@mui/material/Grid';
import DataTable from 'react-data-table-component';
import Accordion from 'components/common/accordion';
import Paper from 'components/common/paper';
import { FAKE_COLUMNS, FAKE_DATA, FAKE_TEXT } from './fake-data';

const TableFakePage = () => (
	<Grid container spacing={2}>
		<Grid item xs={4}>
			<div style={{ marginBottom: '1em' }}>
				<Accordion title="Accordion sample">{FAKE_TEXT}</Accordion>
			</div>
			<Paper>{FAKE_TEXT}</Paper>
		</Grid>
		<Grid item xs={8}>
			<Paper>
				<DataTable
					title="Fake data"
					columns={FAKE_COLUMNS}
					data={FAKE_DATA}
					pagination
				/>
			</Paper>
		</Grid>
	</Grid>
);

export default TableFakePage;
