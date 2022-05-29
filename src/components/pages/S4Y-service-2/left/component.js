import React from 'react';
import Accordion from 'components/common/accordion';
//import Paper from '@mui/material/Paper';
import Paper from 'components/common/paper';
import { SERVICE_2_TITLE, SERVICE_2_DESCRIPTION } from '../data';

const Left = () => (
	<>
		<div style={{ marginBottom: '1em', fontWeight: 'bold' }}>
			<Accordion
				className="titleAcc"
				title="Distribution of public and private schools Comparison between Italian and French territories "
			>
				<strong>{SERVICE_2_TITLE}</strong>
			</Accordion>
		</div>
		<Paper style={{ paddingLeft: '1em' }}>{SERVICE_2_DESCRIPTION}</Paper>
	</>
);

export default Left;
