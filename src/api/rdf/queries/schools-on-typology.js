export const schoolsOnType = ({ typology, year, mun, mun2 }) => `PREFIX qb: <http://purl.org/linked-data/cube#> 
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#> 
PREFIX isc: <http://id.cef-interstat.eu/sc/> 
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
PREFIX S4Y: <http://www.istat.it/S4Y>

SELECT distinct (?c as ?country) (str(?nutsLabel) as ?nuts3) (str(?mun) as ?municipality) 
(xsd:integer(?nsc) as ?N_schools) (xsd:integer(?nst) as ?N_students) (?isc as ?isced) WHERE { 
    ?obs qb:dataSet isc:ds1 ; 
         sdmx-measure:obsValue ?pop ;  
         isc:dim-lau ?lauURI ; 
         isc:att-nuts3 ?nuts3URI . 
    ?nuts3URI skos:prefLabel ?nutsLabel . 
    ?nuts3URI skos:notation ?nuts3Code . 
    ?lauURI skos:prefLabel ?mun . 
    ?lauURI skos:notation ?lau_Code. 
    
        ?g a S4Y:V_group_attendance;
        S4Y:isced_school_code ?isc;
        S4Y:Country ?c;
        S4Y:NUTS3_code ?nuts3Code ;	
        S4Y:lau_code ?lau_Code;		
        S4Y:cod_scholastic_year '` + year +`';
        S4Y:is_Public_school '` + typology +`' ;
        S4Y:number_of_students ?nst;
    	S4Y:number_of_schools ?nsc .

    #FILTER ((lang(?mun) = 'it') || (lang(?mun) = 'fr')).	
    FILTER (str(?mun)='` + mun +`' || str(?mun)='` + mun2 +`').
    #FILTER (str(?mun)='Cannes' || str(?mun)='Torino').
} 
ORDER BY ?isced 
`;
