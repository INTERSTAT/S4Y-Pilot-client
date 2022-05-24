export const numberSchools =  `PREFIX qb: <http://purl.org/linked-data/cube#> 
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#> 
PREFIX isc: <http://id.cef-interstat.eu/sc/> 
PREFIX skos: <http://www.w3.org/2004/02/skos/core#> 
PREFIX S4Y: <http://www.istat.it/S4Y>

SELECT (xsd:integer(sum(?nsc)) as ?schools) WHERE {     
        ?g a S4Y:V_group_attendance;
        S4Y:isced_school_code ?isc;
        S4Y:Country ?c;
        S4Y:NUTS3_code ?nuts3Code ;	
        S4Y:lau_code '06029';		
        S4Y:cod_scholastic_year ?y;
        S4Y:is_Public_school ?x ;
        S4Y:number_of_students ?nst;
    	S4Y:number_of_schools ?nsc .

    #FILTER ((lang(?municipality) = 'it') || (lang(?municipality) = 'fr')). 
  	#FILTER (lang(?age) = 'en'). 
    #FILTER (lang(?gender) = 'en'). 
    #FILTER (?lau_Code='77183').
    
    #FILTER (?lau_Code='06029').
    #FILTER (?x='Public').
    #FILTER (str(?municipality)='Torino').
    FILTER (?c='FR').
    FILTER (?y='2019').
    FILTER (?isc='1').  
} 
`;
