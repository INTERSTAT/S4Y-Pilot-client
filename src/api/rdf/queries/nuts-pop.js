export const nutsPop = `PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>

select ?population ?nuts3 ?nutsLabel {
    {
        select (SUM(?pop) as ?population) ?nuts where {
            ?obs ?p qb:Observation .
            ?obs sdmx-measure:obsValue ?pop .
            ?obs isc:att-nuts3 ?nuts .
        }
        group by ?nuts
	}
    ?nuts skos:notation ?nuts3 .
	?nuts skos:prefLabel ?nutsLabel .
}
ORDER BY DESC(?population)
LIMIT 50
`;
