# Insurance Premium Calculator

A web-based insurance premium calculator built with Angular 19 that calculates monthly death insurance premiums based on occupation, age, and coverage amount.

## Project Purpose

This application helps users calculate insurance premiums by:
- Collecting personal information (name, age, date of birth)
- Selecting occupation from predefined categories
- Entering desired death coverage amount
- Automatically calculating monthly premium using industry-standard formulas

## Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (version 19.2.4)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd code_assesment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Angular CLI globally (if not already installed):**
   ```bash
   npm install -g @angular/cli@19.2.4
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   ng serve
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:4200/
   ```

## Usage Examples

### Basic Premium Calculation
1. Enter your name: `John Doe`
2. Enter age: `30`
3. Enter date of birth: `01/1994` (mm/YYYY format)
4. Select occupation: `Doctor (Professional)`
5. Enter death sum insured: `100000`
6. Premium automatically calculates: `$54,000.00`

### Occupation Categories
| Occupation | Rating | Factor |
|------------|--------|--------|
| Cleaner | Light Manual | 11.50 |
| Doctor | Professional | 1.50 |
| Author | White Collar | 2.25 |
| Farmer | Heavy Manual | 31.75 |
| Mechanic | Heavy Manual | 31.75 |
| Florist | Light Manual | 11.50 |
| Other | Heavy Manual | 31.75 |

### Premium Formula
```
Monthly Premium = (Death Cover × Occupation Factor × Age) ÷ 1000 × 12
```

## Validation Rules

- **Name**: Required, non-empty
- **Age**: 18-100 years
- **Date of Birth**: mm/YYYY format (e.g., 01/1994)
- **Occupation**: Must select from dropdown
- **Sum Insured**: $1 - $10,000,000

## Testing

**Run unit tests:**
```bash
ng test
```

**Run tests with coverage:**
```bash
ng test --code-coverage
```

## Building for Production

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

## Technology Stack

- **Frontend**: Angular 19.2.4
- **Styling**: CSS3
- **Forms**: Angular Template-driven Forms
- **Testing**: Jasmine + Karma
- **Build Tool**: Angular CLI with Vite

## Project Structure

```
src/
├── app/
│   ├── app.component.ts     # Main component logic
│   ├── app.component.html   # Template
│   ├── app.component.css    # Styles
│   └── app.component.spec.ts # Tests
├── index.html
└── main.ts
```

## Features

- ✅ Real-time premium calculation
- ✅ Form validation with error handling
- ✅ Responsive design
- ✅ Comprehensive test coverage
- ✅ Performance optimized (O(1) occupation lookup)
- ✅ Edge case handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
