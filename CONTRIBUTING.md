# 🤝 Contributing to Peta Interaktif Lokasi

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

---

## 📜 Code of Conduct

### Our Pledge
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm 6+
- Git
- Code editor (VS Code recommended)

### Fork & Clone

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/peta-interaktif-lokasi.git
   cd peta-interaktif-lokasi
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/peta-interaktif-lokasi.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run development server**:
   ```bash
   npm start
   ```

---

## 💻 Development Workflow

### Branch Strategy

```
main
  ├── feat/feature-name      (new features)
  ├── fix/bug-description    (bug fixes)
  ├── docs/update-readme     (documentation)
  ├── refactor/component     (refactoring)
  └── chore/update-deps      (maintenance)
```

### Create a Feature Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feat/my-new-feature
```

### Development Process

1. **Make changes** in your branch
2. **Test locally**: `npm start` and verify in browser
3. **Build test**: `npm run build` to ensure production build works
4. **Commit changes** following commit guidelines
5. **Push to fork**: `git push origin feat/my-new-feature`
6. **Create Pull Request** on GitHub

---

## 📝 Coding Standards

### JavaScript/React

#### Component Structure

```javascript
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

function ComponentName({ prop1, prop2 }) {
  // 1. State declarations
  const [state, setState] = useState(initialValue);
  
  // 2. useEffect hooks
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 4. Render logic
  const computedValue = expensiveComputation();
  
  // 5. Return JSX
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
}

export default ComponentName;
```

#### Naming Conventions

- **Components**: PascalCase (`MapComponent`)
- **Functions**: camelCase (`handleMapClick`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_ZOOM`)
- **Props**: camelCase (`onMapClick`)
- **State**: camelCase (`locations`, `showForm`)

#### Code Style

```javascript
// ✅ Good
const locations = locations.filter(loc => loc.category === filter);

// ❌ Bad
const locations=locations.filter(loc=>loc.category===filter);

// ✅ Good - Destructuring
const { name, contact, category } = formData;

// ❌ Bad - Redundant
const name = formData.name;
const contact = formData.contact;

// ✅ Good - Arrow functions for callbacks
onClick={() => setFilter('all')}

// ❌ Bad - Binding
onClick={this.handleClick.bind(this)}
```

### CSS

#### Class Naming

```css
/* ✅ Good - BEM-inspired */
.filter-panel { }
.filter-panel__button { }
.filter-panel__button--active { }

/* ❌ Bad - Unclear */
.fp { }
.btn { }
```

#### Organization

```css
/* 1. Layout */
.component {
  display: flex;
  position: relative;
}

/* 2. Box model */
.component {
  padding: 1rem;
  margin: 0 auto;
}

/* 3. Typography */
.component {
  font-size: 1rem;
  color: #333;
}

/* 4. Visual */
.component {
  background: white;
  border: 1px solid #ccc;
}

/* 5. Misc */
.component {
  cursor: pointer;
  transition: all 0.3s ease;
}
```

### File Organization

```
src/
├── components/
│   ├── ComponentName/           (Future: component folders)
│   │   ├── index.js
│   │   ├── ComponentName.js
│   │   ├── ComponentName.css
│   │   └── ComponentName.test.js
│   ├── ComponentName.js         (Current: co-located)
│   └── ComponentName.css
```

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "feat(map): add marker clustering"
git commit -m "fix(form): validate phone number format"
git commit -m "docs(readme): update installation steps"
git commit -m "style(app): fix indentation in App.js"
git commit -m "refactor(filter): simplify filter logic"
git commit -m "test(form): add validation tests"
git commit -m "chore(deps): update leaflet to 1.9.4"

# Bad commits
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### Scope Guidelines

- **map**: MapComponent
- **filter**: FilterPanel
- **form**: LocationForm
- **app**: App component or general
- **deps**: Dependencies
- **config**: Configuration files

---

## 🔄 Pull Request Process

### Before Creating PR

- ✅ Code follows style guidelines
- ✅ All tests pass: `npm test`
- ✅ Production build works: `npm run build`
- ✅ No console errors or warnings
- ✅ Responsive design tested (mobile/tablet/desktop)
- ✅ Browser compatibility checked

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
How did you test these changes?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested on multiple browsers
- [ ] Responsive design works properly
```

### PR Review Process

1. **Automated checks** must pass (if set up)
2. **Code review** by maintainers
3. **Changes requested** (if needed)
4. **Approval** and merge

---

## 🐛 Reporting Bugs

### Before Reporting

- Check if bug already reported in Issues
- Try latest version
- Try clearing localStorage and cache

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows 10]
 - Browser: [e.g. Chrome 90]
 - Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information.
```

---

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives considered**
Other solutions you've thought about.

**Additional context**
Any other context, mockups, or examples.
```

### Feature Priority

- **High**: Core functionality improvements
- **Medium**: Nice-to-have features
- **Low**: Minor enhancements

---

## 🧪 Testing Guidelines

### Test Structure

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
  
  it('handles click event', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test ComponentName.test.js
```

---

## 📚 Documentation Guidelines

### Code Comments

```javascript
// ✅ Good - Explain WHY, not WHAT
// Using timestamp as ID to ensure uniqueness across sessions
const id = Date.now();

// ❌ Bad - Obvious
// Set the ID to current timestamp
const id = Date.now();
```

### JSDoc for Complex Functions

```javascript
/**
 * Validates form data before submission
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Location name
 * @param {string} formData.contact - Contact information
 * @returns {Object} Object with error messages or empty if valid
 */
function validateForm(formData) {
  // Validation logic
}
```

---

## 🎨 Design Guidelines

### UI Consistency

- Use existing color palette (see TECHNICAL.md)
- Match existing spacing (0.5rem, 1rem, 1.5rem, 2rem)
- Follow existing border-radius (8px, 10px, 12px, 16px)
- Use emoji icons consistently

### Responsive Design

- Test at: 320px, 480px, 768px, 1024px, 1440px
- Mobile-first approach
- Touch targets: min 44x44px
- Readable fonts: min 14px on mobile

---

## 🔧 Development Tools

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "dsznajder.es7-react-js-snippets",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag"
  ]
}
```

### ESLint Configuration (Future)

```json
{
  "extends": ["react-app"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
```

---

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project credits

---

## 📞 Questions?

- Open an issue with "Question" label
- Check existing issues first
- Join discussions in Issues tab

---

## 🎉 Thank You!

Your contributions make this project better for everyone!

**Happy coding! 🚀**
