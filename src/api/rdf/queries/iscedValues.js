export const iscedValues =  `
PREFIX S4Y: <http://www.istat.it/S4Y>
SELECT distinct ?label WHERE {     
        ?g a S4Y:V_group_attendance;
        S4Y:isced_school_code ?label . 
    	FILTER(?label > "3" ) . 
} 
ORDER BY ?label
`;
