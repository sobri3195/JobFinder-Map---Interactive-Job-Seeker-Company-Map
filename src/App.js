import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import FilterPanel from './components/FilterPanel';
import LocationForm from './components/LocationForm';
import './App.css';

function App() {
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    const savedLocations = localStorage.getItem('locations');
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locations', JSON.stringify(locations));
  }, [locations]);

  const addLocation = (location) => {
    const newLocation = {
      id: Date.now(),
      ...location,
      position: selectedPosition
    };
    setLocations([...locations, newLocation]);
    setShowForm(false);
    setSelectedPosition(null);
  };

  const deleteLocation = (id) => {
    setLocations(locations.filter(loc => loc.id !== id));
  };

  const handleMapClick = (position) => {
    setSelectedPosition(position);
    setShowForm(true);
  };

  const filteredLocations = locations.filter(location => {
    if (filter === 'all') return true;
    return location.category === filter;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>🗺️ Peta Lokasi Interaktif</h1>
        <p className="subtitle">Tambahkan marker untuk Perusahaan atau Pencari Kerja</p>
      </header>

      <div className="main-container">
        <FilterPanel 
          filter={filter} 
          setFilter={setFilter}
          totalLocations={locations.length}
          companiesCount={locations.filter(l => l.category === 'perusahaan').length}
          jobseekersCount={locations.filter(l => l.category === 'pencari-kerja').length}
        />

        <div className="map-container">
          <MapComponent
            locations={filteredLocations}
            onMapClick={handleMapClick}
            deleteLocation={deleteLocation}
          />
        </div>

        {showForm && (
          <LocationForm
            onSubmit={addLocation}
            onCancel={() => {
              setShowForm(false);
              setSelectedPosition(null);
            }}
            position={selectedPosition}
          />
        )}
      </div>

      <footer className="app-footer">
        <p>Klik pada peta untuk menambahkan lokasi baru | Data disimpan secara lokal</p>
      </footer>
    </div>
  );
}

export default App;
