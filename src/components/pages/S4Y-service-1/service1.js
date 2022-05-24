import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './service1.css';

import Left from './left';
import Right from './right';
import Center from './center/component';
import Title from 'components/common/title';
import Paper from '@mui/material/Paper';
import Table from '../table-data';
import {
	GET_POP_FROM_MUNICIPALITY,
	GET_SCHOOLS_FROM_MUNICIPALITY,
} from 'api/constants';

const Service1 = () => {
	const [country, setCountry] = useState('');
	const [isced, setIsced] = useState('');
	const [mun, setMun] = useState('');
	const [year, setYear] = useState('');

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<Left />
			</Grid>

			<Grid item xs={10}>
				<Center
					country={country}
					setCountry={setCountry}
					isced={isced}
					setIsced={setIsced}
					mun={mun}
					setMun={setMun}
					year={year}
					setYear={setYear}
				/>
				<label>
					Country:{country}, isced:{isced}, mun:{mun}, year:{year}
				</label>

				<Stack spacing={1} style={{ height: '100%', width: '100%' }}>
					<div style={{ height: '50%', width: '100%' }}>
						<Title label="Data about the resident population" />
						<Paper>
							<Table
								endpoint={GET_POP_FROM_MUNICIPALITY}
								mun={mun}
								setMun={setMun}
							/>
						</Paper>
					</div>

					<div style={{ height: '100%', width: '100%' }}>
						<Title label="Data about Schools and Students" />
						<Paper>
							<Table
								endpoint={GET_SCHOOLS_FROM_MUNICIPALITY}
								mun={mun}
								setMun={setMun}
								country={country}
								year={year}
								isced={isced}
							/>
						</Paper>
					</div>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Service1;
