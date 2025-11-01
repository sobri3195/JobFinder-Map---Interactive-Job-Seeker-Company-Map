# 🛠️ Technical Documentation

## 🏗️ Architecture Overview

### Application Type
- **Type**: Single Page Application (SPA)
- **Framework**: React 19.2.0
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: None (single page)
- **Data Layer**: localStorage (browser API)

### Component Hierarchy

```
<App>
├── <header> (HTML)
│   └── Title & Subtitle
├── <FilterPanel>
│   ├── Statistics Cards (3x)
│   └── Filter Buttons (3x)
├── <MapComponent>
│   ├── <MapContainer> (react-leaflet)
│   │   ├── <TileLayer> (OpenStreetMap)
│   │   ├── <MapClickHandler> (custom)
│   │   └── <Marker>[] (dynamic)
│   │       └── <Popup> (per marker)
│   └── Delete handler
├── <LocationForm> (conditional)
│   └── Form inputs & validation
└── <footer> (HTML)
    └── Instructions
```

---

## 📊 State Management

### App Component State

```javascript
// Core data
const [locations, setLocations] = useState([]);

// UI state
const [filter, setFilter] = useState('all');
const [showForm, setShowForm] = useState(false);
const [selectedPosition, setSelectedPosition] = useState(null);
```

### LocationForm Component State

```javascript
// Form data
const [formData, setFormData] = useState({
  name: '',
  contact: '',
  category: 'perusahaan',
  description: ''
});

// Validation
const [errors, setErrors] = useState({});
```

### State Flow

```
User Action → Event Handler → setState() → Re-render → UI Update
```

---

## 💾 Data Model

### Location Object

```typescript
interface Location {
  id: number;              // Timestamp-based unique ID
  name: string;            // Location name
  contact: string;         // Contact info
  category: 'perusahaan' | 'pencari-kerja';
  description?: string;    // Optional description
  position: [number, number]; // [latitude, longitude]
}
```

### Example

```json
{
  "id": 1730502000123,
  "name": "PT Teknologi Maju",
  "contact": "021-1234567",
  "category": "perusahaan",
  "description": "Perusahaan teknologi informasi",
  "position": [-6.2088, 106.8456]
}
```

---

## 🗺️ Leaflet Integration

### Map Configuration

```javascript
const defaultCenter = [-6.2088, 106.8456]; // Jakarta
const defaultZoom = 12;

<MapContainer
  center={defaultCenter}
  zoom={defaultZoom}
  className="leaflet-map"
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; OpenStreetMap contributors'
  />
</MapContainer>
```

### Custom Icons

```javascript
// Green marker for job seekers
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Red marker for companies
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  // ... same config
});
```

### Map Event Handling

```javascript
function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}
```

---

## 💾 localStorage Implementation

### Save to localStorage

```javascript
// Automatic save on locations change
useEffect(() => {
  localStorage.setItem('locations', JSON.stringify(locations));
}, [locations]);
```

### Load from localStorage

```javascript
// Load on component mount
useEffect(() => {
  const savedLocations = localStorage.getItem('locations');
  if (savedLocations) {
    setLocations(JSON.parse(savedLocations));
  }
}, []);
```

### Data Structure in localStorage

```javascript
// Key: 'locations'
// Value: JSON string
localStorage.getItem('locations'); 
// Returns: '[{"id":123,"name":"..."}]'
```

---

## 🔍 Filter Logic

### Filter Implementation

```javascript
const filteredLocations = locations.filter(location => {
  if (filter === 'all') return true;
  return location.category === filter;
});
```

### Filter Values
- `'all'`: Show all locations
- `'perusahaan'`: Show only companies
- `'pencari-kerja'`: Show only job seekers

---

## ✅ Form Validation

### Validation Rules

```javascript
const validateForm = () => {
  const newErrors = {};

  // Name validation
  if (!formData.name.trim()) {
    newErrors.name = 'Nama harus diisi';
  } else if (formData.name.trim().length < 3) {
    newErrors.name = 'Nama minimal 3 karakter';
  }

  // Contact validation
  if (!formData.contact.trim()) {
    newErrors.contact = 'Kontak harus diisi';
  } else if (formData.contact.trim().length < 8) {
    newErrors.contact = 'Kontak minimal 8 karakter';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

### Real-time Validation

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
  
  // Clear error for this field
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }));
  }
};
```

---

## 🎨 Styling Approach

### CSS Architecture
- **Global**: index.css (reset, base styles)
- **Component**: Co-located CSS files
- **Naming**: BEM-inspired class names
- **No CSS-in-JS**: Plain CSS for simplicity

### Responsive Strategy
- **Mobile-first**: Base styles for mobile
- **Media queries**: Tablet and desktop overrides
- **Breakpoints**:
  - 480px (mobile → tablet)
  - 768px (tablet → desktop)

### Example Media Query

```css
/* Base (mobile) */
.filter-btn {
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

/* Tablet */
@media (max-width: 768px) {
  .filter-btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
```

---

## 🔄 Component Lifecycle

### App Component

```
Mount
  ↓
Load from localStorage
  ↓
Render with loaded data
  ↓
User interactions
  ↓
Update state
  ↓
Save to localStorage
  ↓
Re-render
```

### LocationForm Component

```
Mount (when showForm = true)
  ↓
Initialize formData
  ↓
User input
  ↓
Validate on change
  ↓
Submit
  ↓
Validate all fields
  ↓
Call onSubmit prop
  ↓
Unmount (showForm = false)
```

---

## 🚀 Performance Optimizations

### Current Optimizations
- Functional components (lighter than class components)
- Direct state updates (no Redux overhead)
- Filter on render (acceptable for < 1000 items)
- Conditional rendering for form

### Future Optimizations
- `React.memo` for MapComponent
- `useMemo` for filteredLocations (if dataset grows)
- Virtual scrolling for marker list (if added)
- Debounce map interactions

---

## 🧪 Testing Strategy

### Unit Tests
- Component rendering
- State updates
- Validation logic
- Event handlers

### Integration Tests
- Form submission flow
- Filter interaction
- localStorage persistence

### E2E Tests (Future)
- Full user journey
- Multi-browser testing
- Responsive testing

---

## 🔌 API Surface

### Props Interface

#### MapComponent
```typescript
interface MapComponentProps {
  locations: Location[];
  onMapClick: (position: [number, number]) => void;
  deleteLocation: (id: number) => void;
}
```

#### FilterPanel
```typescript
interface FilterPanelProps {
  filter: 'all' | 'perusahaan' | 'pencari-kerja';
  setFilter: (filter: string) => void;
  totalLocations: number;
  companiesCount: number;
  jobseekersCount: number;
}
```

#### LocationForm
```typescript
interface LocationFormProps {
  onSubmit: (location: Omit<Location, 'id' | 'position'>) => void;
  onCancel: () => void;
  position: [number, number];
}
```

---

## 📦 Build Configuration

### Create React App Configuration

**Webpack** (via react-scripts):
- Entry: src/index.js
- Output: build/
- Loaders: Babel (JSX → JS), CSS, file-loader
- Plugins: HtmlWebpackPlugin, MiniCssExtractPlugin

**Babel**:
- Preset: react-app
- Transforms: JSX, ES6+

**PostCSS**:
- Autoprefixer
- CSS modules (optional)

### Build Output

```
build/
├── static/
│   ├── css/
│   │   └── main.[hash].css
│   └── js/
│       ├── main.[hash].js
│       └── [chunk].[hash].chunk.js
├── index.html
├── manifest.json
├── favicon.ico
└── ...
```

---

## 🌐 Browser Compatibility

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills
- Included via react-scripts
- No manual polyfills needed

### Progressive Enhancement
- Core functionality requires JavaScript
- No-JS fallback: Display message

---

## 🔐 Security Considerations

### XSS Prevention
- React auto-escapes by default
- No `dangerouslySetInnerHTML` used
- User input sanitized via React

### CSRF
- Not applicable (no server)

### Data Privacy
- No server communication
- No cookies
- No analytics (by default)
- Data stays on device

### Content Security Policy (Future)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' https:; 
               img-src 'self' https: data:;">
```

---

## 🐛 Error Handling

### Current Error Handling
- Form validation errors
- localStorage try-catch (implicit in browser)
- React error boundaries (default CRA behavior)

### Future Error Handling
- Custom error boundary component
- Error logging service
- User-friendly error messages
- Retry mechanisms

---

## 📊 Analytics & Monitoring

### Current Monitoring
- web-vitals (reportWebVitals.js)
- Browser DevTools

### Future Monitoring
- Google Analytics
- Sentry for error tracking
- Custom event tracking
- Performance monitoring

---

## 🔄 CI/CD

### Current Setup
- Manual build: `npm run build`
- Manual deploy: Netlify drop or git integration

### Future CI/CD
- GitHub Actions workflow
- Automated tests on PR
- Automated deploy on merge
- Version tagging

**Example GitHub Actions**:
```yaml
name: Build and Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - run: npm test
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod
```

---

## 📈 Scalability Considerations

### Current Scale
- Suitable for: < 500 locations
- Performance: Excellent
- localStorage: Plenty of space

### Future Scaling
- **> 500 locations**: 
  - Implement virtualization
  - Marker clustering
  - Pagination
- **> 5000 locations**:
  - Backend required
  - API integration
  - Database storage
- **Multi-user**:
  - Authentication
  - Real-time sync
  - Conflict resolution

---

## 🔧 Developer Tools

### Recommended Extensions
- React Developer Tools
- Redux DevTools (if Redux added)
- Lighthouse (performance audit)
- Axe DevTools (accessibility)

### VS Code Extensions
- ESLint
- Prettier
- React snippets
- Auto Import

### Browser DevTools Usage
- **Console**: Error checking
- **Application → Local Storage**: View saved data
- **Network**: Monitor tile loads
- **Performance**: Profile renders

---

## 📚 Code Standards

### JavaScript/React
- ES6+ syntax
- Functional components
- Hooks over HOCs
- Destructuring props
- Arrow functions

### Naming Conventions
- **Components**: PascalCase (MapComponent)
- **Functions**: camelCase (addLocation)
- **Constants**: UPPER_SNAKE_CASE
- **CSS classes**: kebab-case (filter-btn)

### File Organization
- One component per file
- Co-located CSS
- Descriptive names
- Consistent structure

---

## 🔮 Technology Upgrade Path

### React 18 → 19
- Already on React 19.2.0 ✅
- Use concurrent features (future)

### Add TypeScript
- Rename .js → .tsx
- Add type definitions
- Gradual migration

### Add State Management
- Context API (for medium complexity)
- Zustand (lightweight alternative)
- Redux Toolkit (if needed)

### Add Backend
- Node.js + Express
- PostgreSQL/MongoDB
- REST or GraphQL API
- Authentication (JWT)

---

## 📖 Learning Resources

### React
- [React Docs](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### Leaflet
- [Leaflet Docs](https://leafletjs.com/reference.html)
- [React-Leaflet Docs](https://react-leaflet.js.org/)

### localStorage
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Create React App
- [CRA Docs](https://create-react-app.dev/)

---

**End of Technical Documentation**
