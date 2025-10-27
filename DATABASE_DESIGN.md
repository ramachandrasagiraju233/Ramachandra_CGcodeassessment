# Database Design for Insurance Premium Calculator

## Tables

### 1. Members
```sql
Members
├── MemberID (Primary Key, INT, Auto Increment)
├── Name (VARCHAR(100), NOT NULL)
├── Age (INT, NOT NULL)
├── DateOfBirth (VARCHAR(7), NOT NULL) -- Format: mm/YYYY
├── OccupationID (Foreign Key, INT, NOT NULL)
├── DeathSumInsured (DECIMAL(15,2), NOT NULL)
├── CreatedDate (DATETIME, DEFAULT CURRENT_TIMESTAMP)
└── UpdatedDate (DATETIME, DEFAULT CURRENT_TIMESTAMP ON UPDATE)
```

### 2. Occupations
```sql
Occupations
├── OccupationID (Primary Key, INT, Auto Increment)
├── OccupationName (VARCHAR(50), NOT NULL, UNIQUE)
├── OccupationRating (VARCHAR(20), NOT NULL)
└── RatingFactor (DECIMAL(5,2), NOT NULL)
```

### 3. PremiumCalculations (Optional - for audit/history)
```sql
PremiumCalculations
├── CalculationID (Primary Key, INT, Auto Increment)
├── MemberID (Foreign Key, INT, NOT NULL)
├── MonthlyPremium (DECIMAL(10,2), NOT NULL)
├── CalculationDate (DATETIME, DEFAULT CURRENT_TIMESTAMP)
└── Formula (VARCHAR(200)) -- Store the formula used
```

## Sample Data for Occupations Table

| OccupationID | OccupationName | OccupationRating | RatingFactor |
|--------------|----------------|------------------|--------------|
| 1            | Cleaner        | Light Manual     | 11.50        |
| 2            | Doctor         | Professional     | 1.50         |
| 3            | Author         | White Collar     | 2.25         |
| 4            | Farmer         | Heavy Manual     | 31.75        |
| 5            | Mechanic       | Heavy Manual     | 31.75        |
| 6            | Florist        | Light Manual     | 11.50        |
| 7            | Other          | Heavy Manual     | 31.75        |

## Relationships
- Members.OccupationID → Occupations.OccupationID (Many-to-One)
- PremiumCalculations.MemberID → Members.MemberID (Many-to-One)

## Indexes
- Index on Members.OccupationID for faster joins
- Index on PremiumCalculations.MemberID for history queries
- Index on Members.CreatedDate for reporting