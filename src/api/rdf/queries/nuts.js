export const nuts = ({ countryToSelect }) => `
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX isc: <http://id.cef-interstat.eu/sc/>

SELECT DISTINCT ?code ?label ?nuts3URI {
            		?nuts3URI skos:notation ?code .
            		?nuts3URI skos:prefLabel ?label .
           		
            		FILTER (regex (?code , "^(` + countryToSelect +`)")).
				    filter contains(xsd:string(?nuts3URI),"http://id.cef-interstat.eu/sc/nuts3") .
    				FILTER (EXISTS { ?sogg ?pred ?nuts3URI. } ) .
		} 
 ORDER BY(?label)
`;
