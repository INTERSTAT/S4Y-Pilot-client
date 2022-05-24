import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import SelectData from 'components/pages/select-data';
import { LAU, GET_SCHOOL_YEARS, GET_COUNTRIES, GET_ISCED } from 'api/constants';

// const optionsCountry = [
// 	{ value: '1', label: 'Italy' },
// 	{ value: '2', label: 'France' },
// ];

// const optionsSchoolYear = [
// 	{ value: '1', label: '2020' },
// 	{ value: '2', label: '2019' },
// 	{ value: '3', label: '2018' },
// ];

// const optionsEdLevel = [
// 	{ value: '1', label: 'Early childhood education' },
// 	{ value: '2', label: 'Primary education' },
// 	{ value: '3', label: 'Lower secondary education' },
// 	{ value: '4', label: 'Upper secondary education' },
// 	{ value: '5', label: 'Post-secondary non-tertiary education' },
// 	{ value: '6', label: 'Short-cycle tertiary education' },
// 	{ value: '7', label: 'Bachelor’s or equivalent level' },
// 	{ value: '8', label: 'Master’s or equivalent level' },
// 	{ value: '9', label: 'Doctoral or equivalent level' },
// ];

const Selection = ({
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
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a Country to analize
					</label>
					{/* <Select options={optionsCountry} placeholder="Italy" /> */}

					<SelectData endpoint={GET_COUNTRIES} country={country} setCountry={setCountry} />

					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select a Municipality
					</label>

					{/* <SelectData endpoint={LAU} lang={'it'} mun={mun} setMun={setMun} /> */}
					<SelectData endpoint={LAU} lang={country}  mun={mun} setMun={setMun} />  

				</div>
			</Grid>

			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%' }}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select an Educational Level (ISCED)
					</label>
					{/* <Select options={optionsEdLevel} placeholder="Primary education" /> */}

					<SelectData endpoint={GET_ISCED} isced={isced} setIsced={setIsced}  />

					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select a School Year
					</label>
					{/* <Select options={optionsSchoolYear} placeholder="2020" /> */}
					<SelectData endpoint={GET_SCHOOL_YEARS} year={year} setYear={setYear} /> 
				</div>
			</Grid>
		</Grid>
	</>
);
};

export default Selection;
