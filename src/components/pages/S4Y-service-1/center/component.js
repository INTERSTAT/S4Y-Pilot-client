import React from 'react';
//import Grid from '@mui/material/Grid';
import 'leaflet/dist/leaflet.css';
//import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Table from '../../table-data';
import Title from 'components/common/title';

//import { GET_NUTS_POP2 } from 'api/constants';
import { GET_NUTS_POP3 } from 'api/constants';

import Map from './map';

const Center = () => ( 
    <>
        <div style={{ height: '55%', width: '100%' }}>
            <Map />
        </div>

        <div style={{ height: '50%', width: '100%' }}>
                <Title label="Data about the resident population" />
                <Paper>
                    <Table endpoint={GET_NUTS_POP3} /> 
                </Paper>
        </div>
    </>
);

export default Center;
