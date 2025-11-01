# 📁 Project Structure

## 🗂️ Directory Overview

```
peta-interaktif-lokasi/
├── 📄 Documentation Files
│   ├── README.md              # Main documentation
│   ├── QUICKSTART.md          # Quick start guide
│   ├── DEPLOYMENT.md          # Deployment instructions
│   ├── FEATURES.md            # Feature list & details
│   ├── USAGE_GUIDE.md         # User manual
│   ├── PROJECT_STRUCTURE.md   # This file
│   ├── CHANGELOG.md           # Version history
│   └── LICENSE                # MIT License
│
├── ⚙️ Configuration Files
│   ├── package.json           # Dependencies & scripts
│   ├── package-lock.json      # Lock dependencies
│   ├── .gitignore             # Git ignore rules
│   ├── .env.example           # Environment variables example
│   └── netlify.toml           # Netlify configuration
│
├── 📱 Public Assets (public/)
│   ├── index.html             # HTML template
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # SEO robots file
│   ├── favicon.ico            # Favicon
│   ├── logo192.png            # PWA icon 192x192
│   ├── logo512.png            # PWA icon 512x512
│   └── _redirects             # Netlify redirects
│
├── 💻 Source Code (src/)
│   ├── index.js               # Entry point
│   ├── index.css              # Global styles
│   ├── App.js                 # Main component
│   ├── App.css                # App styles
│   ├── reportWebVitals.js     # Performance monitoring
│   ├── setupTests.js          # Test configuration
│   ├── App.test.js            # App tests
│   ├── logo.svg               # React logo (unused)
│   │
│   └── components/            # React components
│       ├── MapComponent.js        # Map with markers
│       ├── MapComponent.css       # Map styles
│       ├── FilterPanel.js         # Filter controls
│       ├── FilterPanel.css        # Filter styles
│       ├── LocationForm.js        # Add location form
│       └── LocationForm.css       # Form styles
│
├── 📦 Build Output (build/)    [Generated]
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   ├── index.html
│   └── ...
│
└── 📚 Dependencies (node_modules/)  [Installed]
    └── ... (1300+ packages)
```

---

## 📄 File Descriptions

### Documentation Files

#### README.md
- **Purpose**: Main project documentation
- **Content**:
  - Project overview
  - Feature list
  - Installation instructions
  - Usage guide
  - Deployment guide
  - Customization tips
  - Data format
  - Future development ideas

#### QUICKSTART.md
- **Purpose**: Quick start for impatient users
- **Content**:
  - 3-step installation
  - Quick examples
  - Fast deployment
  - Common tips

#### DEPLOYMENT.md
- **Purpose**: Detailed deployment guide
- **Content**:
  - 3 deployment methods (drag-drop, git, CLI)
  - Step-by-step instructions
  - Custom domain setup
  - Troubleshooting
  - Monitoring tips

#### FEATURES.md
- **Purpose**: Comprehensive feature documentation
- **Content**:
  - All features explained
  - Technical details
  - Performance metrics
  - Security considerations
  - Browser support
  - Accessibility notes
  - Future roadmap

#### USAGE_GUIDE.md
- **Purpose**: User manual for end users
- **Content**:
  - Interface overview
  - Step-by-step usage
  - Visual indicators
  - FAQ
  - Troubleshooting

#### PROJECT_STRUCTURE.md
- **Purpose**: This file - explain project organization
- **Content**:
  - Directory structure
  - File descriptions
  - Component relationships
  - Data flow

#### CHANGELOG.md
- **Purpose**: Version history
- **Content**:
  - Release notes
  - Version changes
  - Bug fixes
  - Feature additions

#### LICENSE
- **Purpose**: Legal license
- **Content**: MIT License text

---

### Configuration Files

#### package.json
```json
{
  "name": "peta-interaktif-lokasi",
  "version": "1.0.0",
  "dependencies": {
    "leaflet": "^1.9.4",
    "react": "^19.2.0",
    "react-leaflet": "^5.0.0",
    ...
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

#### netlify.toml
- **Purpose**: Netlify build configuration
- **Content**:
  - Build command: `npm run build`
  - Publish directory: `build`
  - Redirect rules for SPA

#### .gitignore
- **Purpose**: Files to ignore in Git
- **Content**:
  - node_modules/
  - build/
  - .env files
  - logs

#### .env.example
- **Purpose**: Example environment variables
- **Content**: Currently empty (no env vars needed)

---

### Public Assets

#### index.html
- **Purpose**: Main HTML template
- **Content**:
  - Meta tags (SEO, description, keywords)
  - Leaflet CSS CDN
  - Root div for React

#### manifest.json
- **Purpose**: PWA manifest
- **Content**:
  - App name, short name
  - Icons (192, 512)
  - Theme colors
  - Display mode: standalone

#### _redirects
- **Purpose**: Netlify SPA routing
- **Content**: `/* /index.html 200`

#### favicon.ico, logo192.png, logo512.png
- **Purpose**: App icons
- **Usage**: Browser tab, PWA icons

#### robots.txt
- **Purpose**: SEO crawler instructions
- **Content**: Allow all

---

### Source Code

#### src/index.js
- **Purpose**: Application entry point
- **Responsibilities**:
  - Import React, ReactDOM
  - Render App component to DOM
  - Setup StrictMode
  - Call reportWebVitals

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
```

#### src/App.js
- **Purpose**: Main application component
- **Responsibilities**:
  - State management (locations, filter, form visibility)
  - localStorage integration (load/save)
  - Event handlers (add, delete, filter)
  - Render layout (header, filter, map, form, footer)

**State Variables**:
- `locations`: Array of location objects
- `filter`: Current filter ('all', 'perusahaan', 'pencari-kerja')
- `showForm`: Boolean for form visibility
- `selectedPosition`: [lat, lng] for new location

**Functions**:
- `addLocation(location)`: Add new location
- `deleteLocation(id)`: Remove location by ID
- `handleMapClick(position)`: Open form at position

#### src/components/MapComponent.js
- **Purpose**: Interactive map with markers
- **Responsibilities**:
  - Render Leaflet map
  - Display markers with correct colors
  - Handle map clicks
  - Show popups with location details

**Props**:
- `locations`: Array of locations to display
- `onMapClick`: Function called when map is clicked
- `deleteLocation`: Function to delete a location

**Custom Icons**:
- `greenIcon`: Green marker for job seekers
- `redIcon`: Red marker for companies

#### src/components/FilterPanel.js
- **Purpose**: Filter controls and statistics
- **Responsibilities**:
  - Display location counters
  - Render filter buttons
  - Handle filter changes

**Props**:
- `filter`: Current active filter
- `setFilter`: Function to change filter
- `totalLocations`: Total count
- `companiesCount`: Companies count
- `jobseekersCount`: Job seekers count

#### src/components/LocationForm.js
- **Purpose**: Form to add new location
- **Responsibilities**:
  - Form inputs (name, contact, category, description)
  - Validation (real-time)
  - Submit handling
  - Cancel handling

**Props**:
- `onSubmit`: Function called on form submit
- `onCancel`: Function called on cancel
- `position`: [lat, lng] of selected position

**State**:
- `formData`: Object with form fields
- `errors`: Object with validation errors

**Validation Rules**:
- Name: Required, min 3 characters
- Contact: Required, min 8 characters
- Category: Required (dropdown)
- Description: Optional

---

## 🔄 Data Flow

### Adding a Location

```
User clicks map
    ↓
App.handleMapClick(position)
    ↓
Set selectedPosition, showForm = true
    ↓
Render LocationForm
    ↓
User fills form, clicks Submit
    ↓
LocationForm.validateForm()
    ↓
LocationForm.handleSubmit()
    ↓
App.addLocation(location)
    ↓
Add to locations array
    ↓
useEffect detects change
    ↓
Save to localStorage
    ↓
MapComponent re-renders with new marker
```

### Filtering Locations

```
User clicks filter button
    ↓
FilterPanel button onClick
    ↓
App.setFilter(newFilter)
    ↓
App re-calculates filteredLocations
    ↓
MapComponent receives filtered array
    ↓
Only matching markers shown
```

### Deleting a Location

```
User clicks marker → popup opens
    ↓
User clicks "Hapus" button
    ↓
MapComponent calls deleteLocation(id)
    ↓
App.deleteLocation(id)
    ↓
Filter out from locations array
    ↓
useEffect detects change
    ↓
Update localStorage
    ↓
MapComponent re-renders without marker
```

### Data Persistence

```
App mounts
    ↓
useEffect (on mount)
    ↓
Read localStorage['locations']
    ↓
Parse JSON → setLocations()
    ↓
MapComponent renders markers

---

locations changes (add/delete)
    ↓
useEffect (on locations change)
    ↓
Stringify locations → save to localStorage
```

---

## 🎨 Style Architecture

### Global Styles (index.css)
- CSS reset
- Body fonts
- Box-sizing

### App Styles (App.css)
- Layout structure
- Header/footer
- Container
- Responsive breakpoints

### Component Styles
- **MapComponent.css**: Map container, popup styles
- **FilterPanel.css**: Filter buttons, info cards
- **LocationForm.css**: Form overlay, inputs, buttons

### Design System

**Colors**:
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Purple dark)
- Success: #10b981 (Green)
- Danger: #ef4444 (Red)
- Neutral: #718096 (Gray)

**Spacing**:
- 0.5rem = 8px
- 1rem = 16px
- 1.5rem = 24px
- 2rem = 32px

**Border Radius**:
- Small: 8px
- Medium: 10px
- Large: 12px
- XL: 16px
- Pill: 20px

**Shadows**:
- Small: 0 2px 4px rgba(0,0,0,0.05)
- Medium: 0 4px 12px rgba(0,0,0,0.1)
- Large: 0 10px 30px rgba(0,0,0,0.3)

**Transitions**:
- All: 0.3s ease

---

## 📦 Dependencies

### Production
- **react** (19.2.0): UI library
- **react-dom** (19.2.0): React DOM renderer
- **react-scripts** (5.0.1): Build tools
- **leaflet** (1.9.4): Map library
- **react-leaflet** (5.0.0): React wrapper for Leaflet
- **web-vitals**: Performance monitoring

### Dev Dependencies
- None (all included in react-scripts)

### Peer Dependencies
- Node.js 14+
- npm 6+

---

## 🏗️ Build Process

### Development Build
```bash
npm start
```
- Start dev server on port 3000
- Hot reload enabled
- Source maps enabled
- No minification

### Production Build
```bash
npm run build
```
- Minify JS/CSS
- Optimize images
- Generate source maps
- Bundle splitting
- Output to `build/`

**Build Output**:
- Main JS: ~113 KB (gzipped)
- Main CSS: ~8 KB (gzipped)
- Chunks: Dynamic imports
- Static assets: Public folder copied

---

## 🧪 Testing

### Test Files
- **App.test.js**: Basic App component test
- **setupTests.js**: Jest configuration

### Run Tests
```bash
npm test
```

### Test Libraries
- Jest (included in react-scripts)
- React Testing Library

---

## 🔌 Integration Points

### External Services
- **OpenStreetMap**: Map tiles (via Leaflet)
- **CDN**: Leaflet CSS, marker icons

### Browser APIs
- **localStorage**: Data persistence
- **DOM API**: React rendering

### No Backend Required
- ✅ No API calls
- ✅ No database
- ✅ No server
- ✅ 100% client-side

---

## 📐 Responsive Breakpoints

### Desktop (> 768px)
- Full layout
- Side-by-side elements
- Larger spacing

### Tablet (480px - 768px)
- Medium layout
- Some stacking
- Medium spacing

### Mobile (< 480px)
- Vertical layout
- Single column
- Compact spacing
- Touch-optimized

---

## 🚀 Performance Considerations

### Bundle Size
- Keep < 200 KB total (gzipped)
- Code splitting for future features
- Lazy load heavy components

### Runtime Performance
- React.memo for expensive components
- useMemo for expensive computations
- Filter on render (small dataset)

### Load Time
- Inline critical CSS (future)
- Preload Leaflet CSS
- Optimize images (if added)

---

## 🔐 Security

### Client-Side Only
- No sensitive data stored
- No user authentication
- No API keys needed

### XSS Prevention
- React auto-escapes
- No dangerouslySetInnerHTML

### CORS
- Not applicable (no API calls)

---

**End of Project Structure Documentation**
