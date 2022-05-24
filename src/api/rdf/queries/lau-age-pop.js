export const lauAgePop = ({ municipality }) => `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

SELECT ?municipality ?age (sum(?pop) AS ?population) WHERE {
    ?obs qb:dataSet isc:ds1 ;
         sdmx-measure:obsValue ?pop ;
         isc:dim-sex ?sexURI ;
         isc:dim-age ?ageClassURI ;
         isc:dim-lau ?lauURI ;
         isc:att-nuts3 ?nuts3 .
    #?nuts3 skos:prefLabel ?nutsLabel .
    ?nuts3 skos:notation ?nuts3Code .
    ?sexURI skos:prefLabel ?gender .
    ?ageClassURI skos:prefLabel ?age .
    ?lauURI skos:prefLabel ?municipality .
    ?lauURI skos:notation ?lau_Code.
    
    #FILTER (regex (?nuts3Code , "^(IT)")).
    #FILTER (lang(?sex) = 'en').
    
    FILTER ((lang(?municipality) = 'it') || (lang(?municipality) = 'fr')).
    FILTER (lang(?age) = 'en').
    FILTER (lang(?gender) = 'en').
    #FILTER (?lau_Code='').
    FILTER (str(?municipality) ='` + municipality + `').
}
GROUP BY ?municipality ?age
ORDER BY DESC(?population)
`;
