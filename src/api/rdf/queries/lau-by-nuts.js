export const lauByNuts = ({ lang, nuts3Code }) => `
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?label ?nuts3Code WHERE { 
    ?obs qb:dataSet isc:ds1 ; 
         isc:dim-lau ?lauURI ;
         isc:att-nuts3 ?nuts3 . 
    ?lauURI skos:prefLabel ?label . 
    ?nuts3 skos:notation '` + nuts3Code +`' . 
    
    FILTER (lang(?label) = '` + lang +`').
} 
ORDER BY ?label
`;