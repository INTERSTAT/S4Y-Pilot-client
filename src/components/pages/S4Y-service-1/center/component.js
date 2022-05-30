import React from 'react';
//import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import 'leaflet/dist/leaflet.css';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import Selection from '../right/selection';
import { GET_NUMBER_SCHOOLS } from 'api/constants';
import Map from './map';
//import Map from './interactive-map/fetcher';
import Value from './value';

const Center = ({
	country,
	setCountry,
	isced,
	setIsced,
	mun,
	setMun,
	nuts,
	setNuts,
	year,
	setYear,
	lauCode, 
	setLauCode
}) => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<div style={{ height: '100%', width: '100%' }}>
						{/* <Map /> */}
						<Map />
					</div>
				</Grid>

				<Grid item xs={6}>
					<div
						style={{
							height: '100%',
							width: '100%',
							border: 'double',
							borderRadius: '25px',
							borderColor: '#9ba4cf',
							paddingLeft: '0.8rem',
						}}
					>
						<Title label="Geographic area" />
						<Selection
							country={country}
							setCountry={setCountry}
							isced={isced}
							setIsced={setIsced}
							mun={mun}
							setMun={setMun}
							nuts={nuts}
							setNuts={setNuts}
							year={year}
							setYear={setYear}
							lauCode={lauCode}
							setLauCode={setLauCode}
						/>

						<div style={{ paddingLeft: '5rem', textAlign: 'center' }}>
							<Title label="Total number of Schools in the selected municipality" />
							{/* <label style={{textAlign: 'center', color:'#9ba4cf', fontSize: '1rem' }}>considering the Public and Private schools of all ISCED levels</label> */}
						</div>

						<Value
							endpoint={GET_NUMBER_SCHOOLS}
							country={country}
							mun={mun}
							year={year}
							// setYear={setYear}
						></Value>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Center;
