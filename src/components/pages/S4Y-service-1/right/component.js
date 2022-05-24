import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
//import Stack from '@mui/material/Stack';

//import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';

import Title from 'components/common/title';
import Selection from './selection';

const Right = () => (
	<>
		<div style={{ height: '100%',
					  width: '100%',
				      border: 'double',
					  borderRadius: '25px',
					  borderColor: '#9ba4cf',
					  paddingLeft: '0.8rem',
					  }}>
			
			<Title label="Geographic area" />
				<Selection />

				<div style={{paddingLeft: '5rem', textAlign: 'center' }}>
					<Title label="Number of schools in the selected municipality for the selected ISCED level" />
				</div>
		
		</div>

		{/* <div style={{ height: '50%', width: '100%' }}>
			<Title label="Data about Schools and Students" />
			<Paper>
				<Table endpoint={GET_NUTS_POP2} />
			</Paper>
		</div> */}
	</>
);

export default Right;