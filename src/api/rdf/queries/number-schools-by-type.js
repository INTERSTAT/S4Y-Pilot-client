export const numberSchoolsByType = ({ country, year, type, lauCode }) =>  `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
PREFIX S4Y: <http://www.istat.it/S4Y>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT (xsd:integer(sum(?nsc)) as ?schools)  WHERE {     
        ?g a S4Y:V_group_attendance;
        S4Y:isced_school_code ?isc;
        S4Y:Country ?c;
        S4Y:NUTS3_code ?nuts3Code ;	
        S4Y:lau_code ?lauCode;		
        S4Y:cod_scholastic_year ?y;
        S4Y:is_Public_school '` + type + `' ;
        S4Y:number_of_students ?nst;
    	S4Y:number_of_schools ?nsc .
    
     #?a rdf:type skos:Concept .
     #?a skos:prefLabel ?municipality . 
     #?a skos:notation ?lauCode . 
    
    FILTER (?c='` + country + `').
    FILTER (str(?lauCode)='` + lauCode + `').
    FILTER (?y='` + year + `').
    FILTER ( ?y='2019' || ?y='2020' || ?y='2021').
} 
`;