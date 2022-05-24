import React from 'react';
//import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import 'leaflet/dist/leaflet.css';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
import Title from 'components/common/title';
import Grid from '@mui/material/Grid';
import Selection from '../right/selection';
import { GET_NUTS_POP3, GET_NUMBER_SCHOOLS } from 'api/constants';
import Map from './map';
import Value from './value';

const Center = ({
	country,
	setCountry,
	isced,
	setIsced,
	mun,
	setMun,
	year,
	setYear,
}) => {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<div style={{ height: '100%', width: '100%' }}>
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
							year={year}
							setYear={setYear}
						/>

						<div style={{ paddingLeft: '5rem', textAlign: 'center' }}>
							<Title label="Number of schools in the selected municipality for the selected ISCED level" />
						</div>

						<Value endpoint={GET_NUMBER_SCHOOLS}></Value>
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Center;
