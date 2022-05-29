import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InterstatAccordion = ({ title, children }) => (
	<div>
		<Accordion elevation={8}>
			<AccordionSummary style ={{paddingLeft: '2em',  paddingRight: '2em', color: '#6b718f'}}
				//expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography style={{fontSize: 18, fontFamily: 'serif', fontWeight: 'bold' }}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{children}</Typography>
			</AccordionDetails>
		</Accordion>
	</div>
);

export default InterstatAccordion;
