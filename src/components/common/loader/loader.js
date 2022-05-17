import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const DEFAULT_STYLE = {
	marginTop: '5em',
	marginBottom: '5em',
	width: '60%',
	marginLeft: '20%',
};

const Loader = ({ style = DEFAULT_STYLE }) => (
	<Box sx={style}>
		<LinearProgress />
	</Box>
);

export default Loader;
