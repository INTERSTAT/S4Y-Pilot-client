import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
import Select from 'react-select';
import Title from 'components/common/title';

import SelectData from 'components/pages/select-data/select-data';
import {
	NUTS,
	LAU,
	GET_SCHOOL_YEARS,
	GET_LAU_FROM_NUTS
} from 'api/constants';


const One = ({ lauIt, setLauIt, lauFr, setLauFr,  nutsIt, setNutsIt, nutsFr, setNutsFr, year, setYear  }) => {

	return (
	<>
		<Grid container spacing={1}>
			<Grid item xs={6}>
				<div
					style={{
						height: '100%',
						width: '90%',
						border: 'double',
						borderRadius: '15px',
						borderColor: '#9ba4cf',
						paddingLeft: '0.8rem',
						paddingRight: '0.6rem',
						paddingTop: '0.6rem',
					}}
				>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a French NUTS3 Region
					</label>

				    <SelectData endpoint={NUTS} country={'FR'} nutsFr={nutsFr} setNutsFr={setNutsFr} />

					<br />
					<label
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 'small',
							paddingTop: '10',
						}}
					>
						Select a French Municipality:
					</label>

					 {/* <SelectData endpoint={LAU} lang={'fr'} lauFr={lauFr} setLauFr={setLauFr} />   */}

					 <SelectData endpoint={GET_LAU_FROM_NUTS} lang={'fr'} nuts3Code={nutsFr} lauFr={lauFr} setLauFr={setLauFr} /> 

				</div>
			</Grid>

			<Grid item xs={6}>
				<div
					style={{
						height: '100%',
						width: '90%',
						border: 'double',
						borderRadius: '15px',
						borderColor: '#9ba4cf',
						paddingLeft: '0.8rem',
						paddingRight: '0.6rem',
						paddingTop: '0.6rem',
					}}
				>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select an Italian NUTS3 Region
					</label>

					<SelectData endpoint={NUTS} country={'IT'} nutsIt={nutsIt} setNutsIt={setNutsIt}  />

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

					{/* <SelectData endpoint={LAU} lang={'it'} lauIt={lauIt} setLauIt={setLauIt} /> */}

					<SelectData endpoint={GET_LAU_FROM_NUTS} lang={'it'} nuts3Code={nutsIt} lauIt={lauIt} setLauIt={setLauIt} /> 


				</div>
			</Grid>
		</Grid>

		<Grid container spacing={1}>
			<Grid item xs={12}>
				<div
					style={{
						height: '50%',
						width: '30%',
						marginLeft: '13rem',
						paddingTop: '2rem',
					}}
				>
					<label
						style={{ color: 'black', fontWeight: 'bold', fontSize: 'small' }}
					>
						Select a School Year
					</label>
					{/* <Select options={optionsSchoolYear} placeholder="2020" /> */}
					<SelectData endpoint={GET_SCHOOL_YEARS} year={year} setYear={setYear} /> 
				</div>
			</Grid>
		</Grid>

		<Grid container spacing={1}>
			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
					<Title label="French Schools [%]" />
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
							fontSize: 'medium',
						}}
					>
						Private Schools:
					</label>
				</div>
			</Grid>

			<Grid item xs={6}>
				<div style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
					<Title label="Italian Schools [%]" />
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
							fontSize: 'medium',
						}}
					>
						Private Schools:
					</label>
				</div>
			</Grid>
		</Grid>
	</>

	);
};

export default One;
