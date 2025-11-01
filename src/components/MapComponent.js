import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function MapComponent({ locations, onMapClick, deleteLocation }) {
  const defaultCenter = [-6.2088, 106.8456];
  const defaultZoom = 12;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      className="leaflet-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onMapClick={onMapClick} />
      
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={location.category === 'pencari-kerja' ? greenIcon : redIcon}
        >
          <Popup className="custom-popup">
            <div className="popup-content">
              <div className="popup-header">
                <span className={`category-badge ${location.category}`}>
                  {location.category === 'pencari-kerja' ? '👤 Pencari Kerja' : '🏢 Perusahaan'}
                </span>
              </div>
              <h3>{location.name}</h3>
              <div className="popup-details">
                <p><strong>📞 Kontak:</strong> {location.contact}</p>
                {location.description && (
                  <p><strong>📝 Deskripsi:</strong> {location.description}</p>
                )}
                <p className="coordinates">
                  📍 {location.position[0].toFixed(5)}, {location.position[1].toFixed(5)}
                </p>
              </div>
              <button 
                className="delete-btn"
                onClick={() => deleteLocation(location.id)}
              >
                🗑️ Hapus Lokasi
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
