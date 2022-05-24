import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service2.css';

import Paper from '@mui/material/Paper';
import Table from '../table-data';
import { GET_LAU_AGE_POP, GET_SCHOOLS_ON_TYPE } from 'api/constants';

import Left from './left';
import One from './center/one';
import Title from 'components/common/title';
import Map from './center/map';

const Service2 = () => {
	const [lauIt, setLauIt] = useState('');
	const [lauFr, setLauFr] = useState('');
	const [year, setYear] = useState('');

	let municipality = '';

	return (
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
									paddingBottom: '0.3rem',
								}}
							>
								<Title label="Geographic areas" />

								<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
									<One
										lauIt={lauIt}
										setLauIt={setLauIt}
										lauFr={lauFr}
										setLauFr={setLauFr} 
										year={year}
										setYear={setYear}
									/>
									{/* <label>Label It Mun:{lauIt}</label>
									<label>Label Fr Mun:{lauFr}</label> */}
								</Stack>
							</div>
						</Grid>

						<Grid item xs={6}>
							<Map />
						</Grid>
					</Grid>

					<div
						style={{
							height: '100%',
							width: '100%',
							paddingTop: '0.5rem',
							textAlign: 'center',
						}}
					>
						<Title label="Data about Schools and Students" />
					</div>

					<Grid container spacing={1}>
						<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', textAlign: 'center' }}
							>
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
							<Table
										endpoint={GET_SCHOOLS_ON_TYPE}
										mun={lauFr}
										mun2={lauIt}
										typology={'Public'}
										year={year}
										setYear={setYear}
									/>
								{/* <Table endpoint={GET_NUTS_POP3} /> */}
							</Paper> 
							</div>
						</Grid>

						<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', textAlign: 'center' }}
							>
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
								<Table
										endpoint={GET_SCHOOLS_ON_TYPE}
										mun={lauFr}
										mun2={lauIt}
										typology={'Private'}
										year={year}
										setYear={setYear}
									/>
								{/* <Table endpoint={GET_NUTS_POP2} /> */}
							</Paper>
							</div>
						</Grid>
					</Grid>

					<div
						style={{
							height: '100%',
							width: '100%',
							paddingTop: '0.5rem',
							textAlign: 'center',
						}}
					>
						<Title label="Data about resident population" />
					</div>

					<Grid container spacing={1}>
						<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', textAlign: 'center' }}
							>
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
									{/* <Table
										endpoint={GET_LAU_AGE_POP}
										mun={types}
										types={types}
										setTypes={setTypes}
									/> */}
									<Table
										endpoint={GET_LAU_AGE_POP}
										mun={lauFr}
										lauIt={lauIt}
										setLauIt={setLauIt}
										lauFr={lauFr}
										setLauFr={setLauFr}
									/>
								</Paper>
							</div>
						</Grid>

						<Grid item xs={6}>
							<div
								style={{ height: '100%', width: '100%', textAlign: 'center' }}
							>
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
									<Table
										endpoint={GET_LAU_AGE_POP}
										mun={lauIt}
										lauIt={lauIt}
										setLauIt={setLauIt}
										lauFr={lauFr}
										setLauFr={setLauFr}
									/>
								</Paper>
							</div>
						</Grid>
					</Grid>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Service2;
