export const popInSchoolAge = ({ country, mun, year, endpointSEP, endpointS4Y  }) => `
PREFIX qb: <http://purl.org/linked-data/cube#> 
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#> 
PREFIX isc: <http://id.cef-interstat.eu/sc/> 
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
PREFIX S4Y: <http://www.istat.it/S4Y>

SELECT distinct ?nuts3Code (str(?mun) as ?municipality)
(xsd:integer(?nsc) as ?N_schools) ?type (xsd:integer(?nst) as ?N_students) (?isc as ?isced) ?age (xsd:integer(sum(?pop)) AS ?population)  WHERE { 
 
 SERVICE <` + endpointSEP +`> {
 #POPULATION
     ?obs qb:dataSet isc:ds1 ;
         sdmx-measure:obsValue ?pop ;
         isc:dim-sex ?sexURI ;
         isc:dim-age ?ageClassURI ;
         isc:dim-lau ?lauURI ;
         isc:att-nuts3 ?nuts3 .
    ?nuts3 skos:notation ?nuts3Code .
    ?sexURI skos:prefLabel ?gender .
    ?ageClassURI skos:prefLabel ?age .
    ?lauURI skos:prefLabel ?mun .
    ?lauURI skos:notation ?lau_Code.
    
    FILTER((str(?age) = 'under 5 years') || (str(?age) = '5 to 9 years') || (str(?age) = '10 to 14 years') || (str(?age) = '15 to 19 years')) .
    FILTER (str(?mun)='` + mun +`').
    }
 
  #SERVICE <` + endpointS4Y +`> {
  #SCHOOLS 
        ?g a S4Y:V_group_attendance;
        S4Y:isced_school_code ?isc;
        S4Y:Country ?c;
        S4Y:NUTS3_code ?nuts3Code ;	
        S4Y:lau_code ?lau_Code;		
        S4Y:cod_scholastic_year '` + year +`';
        S4Y:is_Public_school ?type ;
        S4Y:number_of_students ?nst;
    	S4Y:number_of_schools ?nsc .
        
        FILTER (str(?c)='` + country +`').
    	FILTER(?isc > "3" ) . 
    #}
    
    BIND( IF(contains(?isc, "0"), (str(?age) = 'under 5 years'), str(?age) ) AS ?condition1).
    BIND( IF(contains(?isc, "1"), (str(?age) = '5 to 9 years'), str(?age) ) AS ?condition2).
    BIND( IF(contains(?isc, "2"), (str(?age) = '10 to 14 years'), str(?age) ) AS ?condition3).
    BIND( IF(contains(?isc, "3"), (str(?age) = '15 to 19 years'), str(?age) ) AS ?condition4).
    
    FILTER(?condition1 = true || ?condition2 = true || ?condition3 = true || ?condition4 = true) . 
} 
GROUP BY ?mun ?age ?nuts3Code ?nsc ?nst ?isc ?type 
ORDER BY ?isced 
`;
