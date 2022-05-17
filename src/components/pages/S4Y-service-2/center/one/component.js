import React from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Select from 'react-select';
import Title from 'components/common/title';

const optionsNUTS3French = [
	{ value: '1', label: 'FR101' },
	{ value: '2', label: 'FR102' },
	{ value: '3', label: 'FR103' },
	{ value: '4', label: 'FR104' },
	{ value: '5', label: 'FR105' },
	{ value: '6', label: 'FR106' },
	{ value: '7', label: 'FR107' },
	{ value: '8', label: 'FR108' },
	{ value: '9', label: '	FRB01' },
	{ value: '10', label: '	FRB02' },
	{ value: '11', label: '	FRB03' },
	{ value: '12', label: '	FRB04' },
	{ value: '13', label: '	FRB05' },
	{ value: '14', label: '	FRB06' },
	{ value: '15', label: '	FRC11' },
	{ value: '16', label: '	FRC12' },
	{ value: '17', label: '	FRC13' },
	{ value: '19', label: '	FRC14' },
];

const optionsNUTS3Italian = [
	{ value: '1', label: 'ITC11' },
	{ value: '2', label: 'ITC12' },
	{ value: '3', label: 'ITC13' },
	{ value: '4', label: 'ITC14' },
	{ value: '5', label: 'ITC15' },
	{ value: '6', label: 'ITC16' },
	{ value: '7', label: 'ITC17' },
	{ value: '8', label: 'ITC18' },
	{ value: '9', label: 'ITC19' },
	{ value: '10', label: 'ITC20' },
	{ value: '11', label: 'ITC31' },
	{ value: '12', label: 'ITC32' },
	{ value: '13', label: 'ITC33' },
	{ value: '14', label: 'ITC34' },
	{ value: '15', label: 'ITC41' },
];

const optionsMunicipalityF = [
	{ value: '1', label: 'Paris' },
	{ value: '2', label: 'Séné et Marna' },
	{ value: '3', label: 'Yvelines' },
	{ value: '4', label: 'Essonne' },
	{ value: '5', label: 'Hauts-de-Seine' },
	{ value: '6', label: 'Seine-Saint-Denis' },
	{ value: '7', label: 'Vallée de la Marne' },
	{ value: '8', label: 'Val-d Oise' },
	{ value: '9', label: 'Cher' },
	{ value: '10', label: 'Eure-et-Loir' },
	{ value: '11', label: 'Interne' },
	{ value: '12', label: 'Indre et Loire' },
	{ value: '13', label: 'Loir-et-Cher' },
	{ value: '14', label: 'Loiret' },
	{ value: '15', label: 'Côte d Or' },
	{ value: '16', label: 'Nièvre' },
	{ value: '17', label: 'Saona et Loira' },
	{ value: '18', label: 'Yonne' },
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

const optionsSchoolYear = [
	{ value: '1', label: '2020' },
	{ value: '2', label: '2019' },
	{ value: '3', label: '2018' }
];

const One = () => (
	<>
		<Grid container spacing={1}>
			<Grid item xs={6}>
				<div style={{ height: '100%', 
							  width: '90%', 
							  border: 'double',
							  borderRadius: '15px',
							  borderColor: '#9ba4cf', 
							  paddingLeft: '0.8rem',
							  paddingRight: '0.6rem',
							  paddingTop: '0.6rem' }}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a French NUTS3 Region
					</label>
					<Select style={{ 
							  height: '100%', 
							  width: '90%' }} options={optionsNUTS3French} placeholder="FR101" />
					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select a French Municipality
					</label>
					<Select options={optionsMunicipalityF} placeholder="Paris" />
				</div>
			</Grid>

			<Grid item xs={6}>
				<div style={{ height: '100%', 
							  width: '90%', 
							  border: 'double',
							  borderRadius: '15px',
							  borderColor: '#9ba4cf', 
							  paddingLeft: '0.8rem',
							  paddingRight: '0.6rem',
							  paddingTop: '0.6rem' }}>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select an Italian NUTS3 Region
					</label>
					<Select style={{ 
							  height: '100%', 
							  width: '90%' }} options={optionsNUTS3Italian} placeholder="IT101" />
					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select an Italian Municipality
					</label>
					<Select options={optionsMunicipalityI} placeholder="Torino" />
				</div>

			</Grid>
		</Grid>

		<Grid container spacing={1}>
			<Grid item xs={12}>
				<div style={{ height: '50%', width: '30%', marginLeft: '13rem', paddingTop: '2rem' }}>
					<label style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}>
						Select a School Year
					</label>
					<Select options={optionsSchoolYear} placeholder="2020" />
				</div>
			</Grid>
		</Grid>

		<Grid container spacing={1}>
			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%', paddingTop: '0rem'}}>
							<Title label="French Schools Percentage Composition" />
							<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'medium',
									
								}}
							>
								Public Schools:
							</label>
							<br />
							<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'medium'
								}}
							>
								Private Schools:
							</label>
				</div>
			</Grid>

			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%', paddingTop: '0rem'}}>
							<Title label="Italian Schools Percentage Composition" />
							<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'medium',
									
								}}
							>
								Public Schools:
							</label>
							<br />
							<label
								style={{
									color: '#545252',
									fontWeight: 'bold',
									fontSize: 'medium'
								}}
							>
								Private Schools:
							</label>
				</div>
			</Grid>

		</Grid>

	</>
);

export default One;
