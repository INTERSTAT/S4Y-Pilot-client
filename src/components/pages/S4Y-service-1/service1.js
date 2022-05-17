import React from 'react';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service1.css';

import Left from './left';
import Right from './right';
import Center from './center/component';

const Service1 = () => (
	<Grid container spacing={2}>
		
		<Grid item xs={2}>
			<Left />
		</Grid>

		<Grid item xs={4}>
			<Center />
		</Grid>

		<Grid item xs={6}>
			<div style={{ height: '100%', width: '100%' }}>
				<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
					<Right />
				</Stack>
			</div>
		</Grid>
	</Grid>
);

export default Service1;
