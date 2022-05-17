import React from 'react';

import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service2.css';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
import Map from './center/map';

const Service2 = () => (
	<Grid container spacing={2}>
		<Grid item xs={2}>
			<Left />
		</Grid>

		<Grid item xs={10}>
			<Stack
				spacing={0.5}
				style={{
					height: '100%',
					width: '100%',
				}}
			>
				<Grid container spacing={5}>
					<Grid item xs={6}>
						<div
							style={{
								height: '100%',
								width: '100%',
								border: 'double',
								borderRadius: '25px',
								borderColor: '#9ba4cf',
								paddingLeft: '0.8rem',
								paddingRight: '0.6rem',
								paddingBottom: '0.3rem'
							}}
						>
							<Title label="Geographic areas" />

							<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
								<One />
							</Stack>
						</div>
					</Grid>

					<Grid item xs={6}>
						<Map />
					</Grid>
				</Grid>
				
				<div style={{ height: '100%', 
							  width: '100%',
							  paddingTop: '0.5rem',
							  textAlign: 'center'}}>
					<Title label="Data about Schools and Students" />
				</div>
				
				<Grid container spacing={1}>			
					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
							<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'large',
									
								}}
							>
								Public Schools
							</label>

							<Paper>
								<Table endpoint={GET_NUTS_POP} />
							</Paper>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
						<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'large',
								}}
							>
								Private Schools
							</label>
							<Paper>
								<Table endpoint={GET_NUTS_POP2} />
							</Paper>
						</div>
					</Grid>
				</Grid>

				<div style={{ height: '100%', 
							  width: '100%',
							  paddingTop: '0.5rem',
							  textAlign: 'center'}}>
					<Title label="Data about resident population" />
				</div>

				<Grid container spacing={1}>
					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
						<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'large',
									
								}}
							>
								Italian Territory
							</label>
							<Paper>
								<Table endpoint={GET_NUTS_POP} />
							</Paper>
						</div>
					</Grid>

					<Grid item xs={6}>
						<div style={{ height: '100%', width: '100%', textAlign: 'center' }}>
						<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'large',
									
								}}
							>
								French Territory
							</label>
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

export default Service2;
