import React from 'react';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { sparqlDataToTable } from 'utils';
import Select from 'react-select';

const SelectData = ({
	endpoint,
	nuts3Code,
	country,
	setCountry,
	lang,
	lauFr,
	setLauFr,
	lauIt,
	setLauIt,
	nutsIt,
	setNutsIt,
	nutsFr,
	setNutsFr,
	nuts,
	setNuts,
	year,
	setYear,
	isced,
	setIsced,
	mun,
	setMun,
	type
}) => {

	if(endpoint === 'GET_LAU_FROM_NUTS' && type==='service1'){
		nuts3Code = nuts;
	}

	const handleChange = (obj) => {
		if (lang === 'it') {
			console.log(obj.label);
			setLauIt(obj.label);
			console.log(JSON.stringify(lauIt));
		}
		if (lang === 'fr') {
			console.log(obj.label);
			setLauFr(obj.label);
			console.log(JSON.stringify(lauFr));
		}
		if (lang === 'IT') {
			console.log(obj.label);
			console.log('MUN:');
			setMun(obj.label);
			console.log(JSON.stringify(mun));
		}
		if (lang === 'FR') {
			console.log(obj.label);
			console.log('MUN:');
			setMun(obj.label);
			console.log(JSON.stringify(mun));
		}
		if (endpoint === 'GET_SCHOOL_YEARS') {
			setYear(obj.label);
			console.log(JSON.stringify(year));
		}
		if (endpoint === 'GET_ISCED') {
			setIsced(obj.label);
			console.log(JSON.stringify(isced));
		}
		if (endpoint === 'GET_COUNTRIES') {
			setCountry(obj.label);
			console.log(JSON.stringify(country));
		}
		if (endpoint === 'NUTS' && country === 'FR' && type !== 'service1' ) {
			setNutsFr(obj.code);
			console.log(JSON.stringify(nutsFr));
		}
		if (endpoint === 'NUTS' && country === 'IT' && type !== 'service1') {
			setNutsIt(obj.code);
			console.log(JSON.stringify(nutsIt));
		}
		if(endpoint === 'NUTS' && type==='service1'){
			setNuts(obj.code);
			console.log(JSON.stringify(nuts));
		}
	};

	const { data, error, loading } = useFetch(
		endpoint,
		'',
		country,
		lang,
		'',
		'',
		'',
		'',
		nuts3Code
	);

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	console.log("TABLE DATA: ");
	console.log(tableData);

	return (
		<Select
			style={{
				height: '100%',
				width: '90%',
			}}
			options={tableData}
			onChange={handleChange}
			getOptionValue={(option) => option.label}
		/>
	);
};

export default SelectData;
