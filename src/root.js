import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	TablePage,
	TableFakePage,
	Service1,
	Service2,
	//Service3,
} from 'components/pages';

const Root = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/table" element={<TablePage />} />
		<Route path="/table-fake" element={<TableFakePage />} />
		<Route path="/S4Y-service-1" element={<Service1 />} />
		<Route path="/S4Y-service-2" element={<Service2 />} />
	</Routes>
);

export default Root;
