import { usePost, SEP } from '../utils';

import {
	nutsPop,
	nutsPop2,
	nutsPop3,
	lauAgePop,
	nuts,
	lau,
	schoolsOnType,
	schoolYears,
	numberSchools,
	countries,
	isced
} from '../queries';

import {
	GET_NUTS_POP,
	GET_NUTS_POP2,
	GET_NUTS_POP3,
	GET_LAU_AGE_POP,
	NUTS,
	LAU,
	GET_SCHOOLS_ON_TYPE,
	GET_SCHOOL_YEARS,
	GET_NUMBER_SCHOOLS,
	GET_COUNTRIES,
	GET_ISCED
} from 'api/constants';

export const useFetch = (
	constant,
	mun,
	country,
	language,
	mun2,
	typology,
	year
) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(SEP)(nutsPop2);
		case GET_NUTS_POP3:
			return usePost(SEP)(nutsPop3);
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
			return usePost(SEP)(numberSchools);
		case GET_COUNTRIES:
			return usePost(SEP)(countries);
		case GET_ISCED:
			return usePost(SEP)(isced);
		default:
			return null;
	}
};
