import { usePost, SEP } from '../utils';

import { nutsPop } from '../queries';
import { nutsPop2 } from '../queries';
import { nutsPop3 } from '../queries';

import { GET_NUTS_POP } from 'api/constants';
import { GET_NUTS_POP2 } from 'api/constants';
import { GET_NUTS_POP3 } from 'api/constants'; 

export const useFetch = (constant) => {
	switch (constant) {
		case GET_NUTS_POP:
			return usePost(SEP)(nutsPop);
		case GET_NUTS_POP2:
			return usePost(SEP)(nutsPop2);
		case GET_NUTS_POP3:
			return usePost(SEP)(nutsPop3);
		default:
			return null;
	}
};
