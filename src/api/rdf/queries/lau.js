export const lau = ({ lang }) => `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?label WHERE { 
    ?obs qb:dataSet isc:ds1 ; 
         isc:dim-lau ?lauURI . 
    ?lauURI skos:prefLabel ?label .
    
    FILTER (lang(?label) = '` + lang +`').
} 
#ORDER BY ?label
LIMIT 1000
`;
