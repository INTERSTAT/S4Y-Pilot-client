import React from 'react';
import 'leaflet/dist/leaflet.css';
import Stack from '@mui/material/Stack';
import './service3.css';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
import Map from './center/map';

const Service3 = () => (
	<Grid container spacing={2}>
		<Grid item xs={2}>
			<Left />
		</Grid>

		<Grid item xs={10}>
			<Stack spacing={0.5} style={{ height: '100%', width: '100%' }}>
				<Grid container spacing={4}>
					<Grid item xs={4}>
						<div
							style={{
								height: '100%',
								width: '100%',
								border: 'double',
								borderRadius: '25px',
								borderColor: '#1678f7',
								paddingLeft: '0.8rem',
								paddingRight: '0.6rem',
							}}
						>
							<Title label="Pollutants" />
							<Stack spacing={2} style={{ height: '100%', width: '100%' }}>
								<One />
							</Stack>
						</div>
					</Grid>

					<Grid item xs={8}>
						<Map />
					</Grid>
				</Grid>

				<Grid container spacing={1}>
					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%' }}>
							<Title label="Air pollution data for ITC11 NUTS3 region" />
							<Paper>
								<Table endpoint={GET_NUTS_POP} />
							</Paper>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%' }}>
							<Title label="Air pollution data for ITC11 NUTS3 region" />
							<Paper>
								<Table endpoint={GET_NUTS_POP2} />
							</Paper>
						</div>
					</Grid>
				</Grid>
			</Stack>
		</Grid>
	</Grid>
);

export default Service3;
