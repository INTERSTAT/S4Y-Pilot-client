export const nuts = ({ countryToSelect }) => `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>
SELECT DISTINCT ?code ?label
		FROM NAMED <http://www.interstat.org/graphs/sep>
		WHERE {
			{ 
				GRAPH ?context { 
            		?nuts3URI skos:notation ?code .
            		?nuts3URI skos:prefLabel ?label .
           		    ?nuts3URI skos:topConceptOf isc:cl-lau .
            		FILTER (regex (?code , "^(` + countryToSelect +`)")).
            }
			}
		} 
 ORDER BY(?label)
`;
