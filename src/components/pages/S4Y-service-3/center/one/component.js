import React from 'react';
import Select from 'react-select';
import Grid from '@mui/material/Grid';

const optionsPM10 = [
	{ value: '1', label: 'Good (<40)' },
	{ value: '2', label: 'Fair (40–80)' },
	{ value: '3', label: 'Poor (80–120)' },
	{ value: '4', label: 'Very Poor (120–300)' },
	{ value: '5', label: 'Extremely Poor (>300)' },
];

const optionsPM2point5 = [
	{ value: '1', label: 'Good (<25)' },
	{ value: '2', label: 'Fair (25–50)' },
	{ value: '3', label: 'Poor (50–100)' },
	{ value: '4', label: 'Very Poor (100–300)' },
	{ value: '5', label: 'Extremely Poor (>300)' },
];

const optionsO3 = [
	{ value: '1', label: 'Good (0.000-0.054)' },
	{ value: '2', label: 'Moderate (0.055-0.070)' },
	{ value: '3', label: 'Unhealthy for Sensitive Groups (0.071-0.085)' },
	{ value: '4', label: 'Unhealthy (0.086-0.105)' },
	{ value: '5', label: 'Very Unhealthy (0.106-0.200)' },
];

const optionsNO2 = [
	{ value: '1', label: 'Good (0-50)' },
	{ value: '2', label: 'Moderate (51-100)' },
	{ value: '3', label: 'Unhealthy for Sensitive Groups (101-150)' },
	{ value: '4', label: 'Unhealthy (151-200)' },
	{ value: '5', label: 'Very Unhealthy (201-300)' },
];

const One = () => (
	<Grid container spacing={2}>
		<Grid item xs={6}>
			<br />
			<br />
			<br />
			<div style={{ height: '100%', width: '100%' }}>
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
					}}
				>
					Select a value for PM10 (µg/m3)
				</label>
				<Select options={optionsPM10} placeholder="Good (<40)" />
				<br />
				<br />
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
						paddingTop: '10',
					}}
				>
					Select a value for NO2 (µg/m3)
				</label>
				<Select options={optionsNO2} placeholder="Good (<25)" />
			</div>
		</Grid>
		<Grid item xs={6}>
			<br />
			<br />
			<br />
			<div style={{ height: '100%', width: '100%' }}>
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
					}}
				>
					Select a value for PM2.5 (µg/m3)
				</label>
				<Select options={optionsPM2point5} placeholder="Good (0-50)" />
				<br />
				<br />
				<label
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 'small',
						paddingTop: '10',
					}}
				>
					Select a value for O3 (ppm)
				</label>
				<Select options={optionsO3} placeholder="Good (0.000-0.054)" />
			</div>
		</Grid>
	</Grid>
);

export default One;
