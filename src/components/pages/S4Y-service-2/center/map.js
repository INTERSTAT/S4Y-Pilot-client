import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const positionRome = [41.9027835, 12.4963655];
const positionParis = [48.864716, 2.349014];
const positionTurin = [45.070312, 7.6868565];

const Map = () => (
	<div style={{ height: '100%', width: '100%' }}>
		<div>
			<MapContainer
				center={positionTurin}
				zoom={4.5}
				style={{
					height: '60vh',
					width: '100wh',
				}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					position={positionRome}
					icon={
						new Icon({
							iconUrl: markerIconPng,
							iconSize: [15, 31],
							iconAnchor: [12, 41],
						})
					}
				>
					<Popup>
						<b>Latitude:</b> {positionRome[0]} <br /> <b>Longitude:</b>{' '}
						{positionRome[1]}
					</Popup>
				</Marker>
				<Marker
					position={positionParis}
					icon={
						new Icon({
							iconUrl: markerIconPng,
							iconSize: [15, 31],
							iconAnchor: [12, 41],
						})
					}
				>
					<Popup>
						<b>Latitude:</b> {positionParis[0]} <br /> <b>Longitude:</b>{' '}
						{positionParis[1]}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	</div>
);

export default Map;
