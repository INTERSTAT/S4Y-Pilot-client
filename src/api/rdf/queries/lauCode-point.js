export const lauCodePoint = ({ lauCode }) => `
PREFIX igf: <http://rdf.insee.fr/def/interstat/gf#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dcterms: <http://purl.org/dc/terms/>

SELECT ?facility ?id ?label ?point WHERE { 
	?facility a igf:Facility .
    ?facility dcterms:type ?type .
    ?facility dc:identifier ?id .
    #FILTER(!strStarts(?id, "fr"))
    #FILTER(strStarts(?id, "fr") = false)
    ?facility rdfs:label ?label .
    ?facility geo:hasGeometry ?geometry .
    ?geometry geo:asWKT ?point .

    ?facility igf:inLAU ?lauCode .
    FILTER(xsd:string(?lauCode) = '` + lauCode + `')
} 
LIMIT 1
`;