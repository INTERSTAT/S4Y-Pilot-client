export const nutsPop2 = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?nutsLabel ?sex (sum(?pop) AS ?population) WHERE {
    ?obs qb:dataSet isc:ds1 ;
         sdmx-measure:obsValue ?pop ;
         isc:dim-sex ?sexURI ;
         isc:att-nuts3 ?nuts3 .
    ?nuts3 skos:prefLabel ?nutsLabel .
    ?nuts3 skos:notation ?nuts3Code .        
    ?sexURI skos:prefLabel ?sex .
    
    FILTER (regex (?nuts3Code , "^(IT)")).
    #FILTER (lang(?sex) = 'en').
    
}
GROUP BY ?nutsLabel ?sex
ORDER BY ?nutsLabel ?sex
LIMIT 50
`;
