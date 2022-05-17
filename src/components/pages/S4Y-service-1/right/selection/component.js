import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Select from 'react-select';

const optionsCountry = [
	{ value: '1', label: 'Italy' },
	{ value: '2', label: 'France' },
];

const optionsSchoolYear = [
	{ value: '1', label: '2020' },
	{ value: '2', label: '2019' },
	{ value: '3', label: '2018' }
];

const optionsMunicipalityI = [
	{ value: '1', label: 'Torino' },
	{ value: '2', label: 'Vercelli' },
	{ value: '3', label: 'Biella' },
	{ value: '4', label: 'Verbano-Cusio-Ossola' },
	{ value: '5', label: 'Novara' },
	{ value: '6', label: 'Cuneo' },
	{ value: '7', label: 'Asti' },
	{ value: '8', label: 'Alessandria' },
	{ value: '9', label: 'Aosta' },
	{ value: '10', label: 'Imperia' },
	{ value: '11', label: 'Savona' },
	{ value: '12', label: 'Genova' },
	{ value: '13', label: 'La Spezia' },
	{ value: '14', label: 'Varese' },
];

const optionsEdLevel = [
	{ value: '1', label: 'Early childhood education' },
	{ value: '2', label: 'Primary education' },
	{ value: '3', label: 'Lower secondary education' },
	{ value: '4', label: 'Upper secondary education' },
	{ value: '5', label: 'Post-secondary non-tertiary education' },
	{ value: '6', label: 'Short-cycle tertiary education' },
	{ value: '7', label: 'Bachelor’s or equivalent level' },
	{ value: '8', label: 'Master’s or equivalent level' },
	{ value: '9', label: 'Doctoral or equivalent level' }
];

const Selection = () => (
	<>
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%' }}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a Country to analize
					</label>
					<Select options={optionsCountry} placeholder="Italy" />
					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select Municipality
					</label>
					<Select options={optionsMunicipalityI} placeholder="Torino" />
				</div>
			</Grid>

			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%' }}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select an Educational Level (ISCED)
					</label>
					<Select options={optionsEdLevel} placeholder="Primary education" />
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
					<Select options={optionsSchoolYear} placeholder="2020" />
				</div>
			</Grid>
		</Grid>
	</>
);

export default Selection;
