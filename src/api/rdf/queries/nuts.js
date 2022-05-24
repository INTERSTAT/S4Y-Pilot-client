export const nuts = ({ countryToSelect }) => `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?label WHERE {
     ?obs qb:dataSet isc:ds1 ;
          sdmx-measure:obsValue ?pop ;
          isc:att-nuts3 ?nuts3 .
     ?nuts3 skos:notation ?label .
 
     FILTER (regex (?label , "^(` + countryToSelect + `)")).
 }
 ORDER BY ?label
`;
