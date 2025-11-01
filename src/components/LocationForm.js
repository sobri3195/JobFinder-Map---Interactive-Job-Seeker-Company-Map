import React, { useState } from 'react';
import './LocationForm.css';

function LocationForm({ onSubmit, onCancel, position }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: 'perusahaan',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Kontak harus diisi';
    } else if (formData.contact.trim().length < 8) {
      newErrors.contact = 'Kontak minimal 8 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        description: formData.description.trim()
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="form-overlay">
      <div className="location-form">
        <div className="form-header">
          <h2>📍 Tambah Lokasi Baru</h2>
          <p className="form-subtitle">
            Koordinat: {position[0].toFixed(5)}, {position[1].toFixed(5)}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <span className="label-icon">✏️</span>
              Nama *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama perusahaan atau pencari kerja"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contact">
              <span className="label-icon">📞</span>
              Kontak *
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Nomor telepon atau email"
              className={errors.contact ? 'error' : ''}
            />
            {errors.contact && <span className="error-message">{errors.contact}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">
              <span className="label-icon">🏷️</span>
              Kategori *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="perusahaan">🏢 Perusahaan</option>
              <option value="pencari-kerja">👤 Pencari Kerja</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <span className="label-icon">📝</span>
              Deskripsi (Opsional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Informasi tambahan tentang lokasi ini..."
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onCancel}>
              ❌ Batal
            </button>
            <button type="submit" className="btn btn-submit">
              ✅ Simpan Lokasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationForm;
