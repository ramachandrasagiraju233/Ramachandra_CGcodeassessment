# Insurance Premium Calculator - Setup Instructions

## Prerequisites
- Node.js (version 18 or higher)
- Angular CLI (version 19.2.4)

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   ng serve
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:4200/
   ```

## Features Implemented

### Form Fields (All Mandatory)
- **Name**: Text input for member name
- **Age Next Birthday**: Number input for age
- **Date of Birth**: Text input in mm/YYYY format
- **Usual Occupation**: Dropdown with predefined occupations
- **Death - Sum Insured**: Number input for coverage amount

### Occupations Available
| Occupation | Rating | Factor |
|------------|--------|--------|
| Cleaner | Light Manual | 11.50 |
| Doctor | Professional | 1.50 |
| Author | White Collar | 2.25 |
| Farmer | Heavy Manual | 31.75 |
| Mechanic | Heavy Manual | 31.75 |
| Florist | Light Manual | 11.50 |
| Other | Heavy Manual | 31.75 |

### Premium Calculation
**Formula:** `Death Premium = (Death Cover amount × Occupation Rating Factor × Age) / 1000 × 12`

- Calculation triggers automatically when occupation is selected
- All fields must be filled for calculation to work
- Result displays as formatted currency

## Database Design
See `DATABASE_DESIGN.md` for complete database schema and table structures.

## Technology Stack
- **Frontend**: Angular 19.2.4
- **Styling**: CSS3
- **Forms**: Angular Reactive Forms
- **Build Tool**: Angular CLI