import { usePost, SEP } from '../utils';

import {
	nutsPop,
	nutsPop2,
	populationFromMunicipality,
	lauAgePop,
	nuts,
	lau,
	schoolsOnType,
	schoolYears,
	numberSchools,
	countries,
	iscedValues,
	schoolsFromMunicipality,
	lauByNuts,
	popInSchoolAge
} from '../queries';

import {
	GET_NUTS_POP,
	GET_NUTS_POP2,
	GET_POP_FROM_MUNICIPALITY,
	GET_LAU_AGE_POP,
	NUTS,
	LAU,
	GET_SCHOOLS_ON_TYPE,
	GET_SCHOOL_YEARS,
	GET_NUMBER_SCHOOLS,
	GET_COUNTRIES,
	GET_ISCED,
	GET_SCHOOLS_FROM_MUNICIPALITY,
	GET_LAU_FROM_NUTS,
	POP_IN_SCHOOL_AGE
} from 'api/constants';

export const useFetch = (
	constant,
	mun,
	country,
	language,
	mun2,
	typology,
	year,
	isced,
	nuts3Code
) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(SEP)(nutsPop2);
		case GET_POP_FROM_MUNICIPALITY:
			return usePost(SEP)(populationFromMunicipality({ mun: mun }));
		case GET_LAU_AGE_POP:
			return usePost(SEP)(lauAgePop({ municipality: mun }));
		case NUTS:
			return usePost(SEP)(nuts({ countryToSelect: country }));
		case LAU:
			return usePost(SEP)(lau({ lang: language.toLowerCase() }));
		case GET_SCHOOLS_ON_TYPE:
			return usePost(SEP)(
				schoolsOnType({ typology: typology, year: year, mun: mun, mun2: mun2 })
			);
		case GET_SCHOOL_YEARS:
			return usePost(SEP)(schoolYears);
		case GET_NUMBER_SCHOOLS:
			return usePost(SEP)(numberSchools({ mun: mun, country: country, year: year }) 
			);
		case GET_COUNTRIES:
			return usePost(SEP)(countries);
		case GET_ISCED:
			return usePost(SEP)(iscedValues);
		case GET_SCHOOLS_FROM_MUNICIPALITY:
			return usePost(SEP)(schoolsFromMunicipality({ mun: mun, country: country, year: year, isced: isced }) 
			);
		case GET_LAU_FROM_NUTS:
			return usePost(SEP)(lauByNuts({lang: language.toLowerCase(), nuts3Code: nuts3Code }));  
		case POP_IN_SCHOOL_AGE:
			return usePost(SEP)(popInSchoolAge({country: country, mun: mun, year: year }));  
		default:
			return null;
	}
};
