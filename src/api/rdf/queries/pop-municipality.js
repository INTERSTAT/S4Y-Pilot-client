export const populationFromMunicipality = ({ mun }) =>  `
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT DISTINCT ?municipality ?municipality_Code (str(?nuts) as ?nuts3) ?nuts3_Code ?age ?gender (xsd:integer(?pop) as ?population) WHERE {
     ?obs qb:dataSet isc:ds1 ;
          sdmx-measure:obsValue ?pop ;
          isc:dim-sex ?sexURI ;
          isc:dim-age ?ageClassURI ;
          isc:dim-lau ?lauURI ;
          isc:att-nuts3 ?nuts3URI .
     ?nuts3URI skos:prefLabel ?nuts .
     ?nuts3URI skos:notation ?nuts3_Code .
     ?sexURI skos:prefLabel ?gender .
     ?lauURI skos:prefLabel ?municipality .
     ?lauURI skos:notation ?municipality_Code.
     ?ageClassURI skos:prefLabel ?age .
     
     #FILTER ((lang(?municipality) = 'it') || (lang(?municipality) = 'fr')).
     FILTER (lang(?age) = 'en').
     FILTER (lang(?gender) = 'en').
     FILTER (str(?municipality)='` + mun +`').
 }
 #GROUP BY ?municipality ?nuts3_Code ?municipality_Code ?age ?gender
 ORDER BY DESC(?pop)
`;
