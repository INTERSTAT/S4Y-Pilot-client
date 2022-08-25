export const schoolYears = `
PREFIX S4Y: <http://www.istat.it/S4Y>
SELECT distinct ?label WHERE {     
        ?g a S4Y:V_group_attendance;
        	S4Y:cod_scholastic_year ?label .
    FILTER (str(?label) != '').
} 
ORDER BY ?label
`;
