import React from 'react';
import './FilterPanel.css';

function FilterPanel({ filter, setFilter, totalLocations, companiesCount, jobseekersCount }) {
  return (
    <div className="filter-panel">
      <div className="filter-info">
        <div className="info-card total">
          <span className="info-icon">📍</span>
          <div className="info-text">
            <span className="info-label">Total Lokasi</span>
            <span className="info-value">{totalLocations}</span>
          </div>
        </div>
        <div className="info-card companies">
          <span className="info-icon">🏢</span>
          <div className="info-text">
            <span className="info-label">Perusahaan</span>
            <span className="info-value">{companiesCount}</span>
          </div>
        </div>
        <div className="info-card jobseekers">
          <span className="info-icon">👤</span>
          <div className="info-text">
            <span className="info-label">Pencari Kerja</span>
            <span className="info-value">{jobseekersCount}</span>
          </div>
        </div>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <span className="btn-icon">🌍</span>
          Semua
        </button>
        <button
          className={`filter-btn perusahaan ${filter === 'perusahaan' ? 'active' : ''}`}
          onClick={() => setFilter('perusahaan')}
        >
          <span className="btn-icon">🏢</span>
          Perusahaan
        </button>
        <button
          className={`filter-btn pencari-kerja ${filter === 'pencari-kerja' ? 'active' : ''}`}
          onClick={() => setFilter('pencari-kerja')}
        >
          <span className="btn-icon">👤</span>
          Pencari Kerja
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;
