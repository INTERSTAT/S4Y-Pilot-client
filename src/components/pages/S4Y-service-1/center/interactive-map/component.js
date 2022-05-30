import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
//import { wktToGeoJSON } from '@terraformer/wkt';



const ROMA = [41.9027835, 12.4963655];

const Map = ({ points, country, zoomValue }) => {
	
return (
	<div style={{ height: '100%', width: '100%' }}>
		{/* <div>
			<MapContainer
				center={ROMA}
				zoom={5}
				style={{ height: '60vh', width: '100wh' }}
			>
			
				return (
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{points.map(({ id, label, point }) => {

					
					if (point.includes('None')) return null;
					const { coordinates } = wktToGeoJSON(point);

					let coord;
					let [lat, lon] = coordinates;

					console.log("LAT  : " + JSON.stringify(lat) + " LON: " + JSON.stringify(lon));

					//console.log(" ======= COUNTRY: " + country);
					// if(country==='FR'){
					// 	coord = [coordinates[1], coordinates[0]];
					// 	[lat, lon] = coord;
					// 	console.log("POSITION for FRENCH : " + JSON.stringify(coord));
					// } else {
					// 	coord = coordinates;
					// }

					return (
						<Marker
						eventHandlers={{
							click: () => {
							  Map.setView(
								[
								  lat,
								  lon
								],
								14
							  );
							}
						  }}


						
							key={id}
							position={coordinates}
							icon={
								new Icon({
									iconUrl: markerIconPng,
									iconSize: [20, 36],
									iconAnchor: [12, 41],
								})
							}
						>
							<Popup>
								<b>{`Latitude: ${lat}`}</b>
								<br />
								<b>{`Longitude: ${lon}`}</b>
							</Popup>
						</Marker>
					);
				})}
				);
			</MapContainer>
		</div> */}
	</div>
);
			}

export default Map;
