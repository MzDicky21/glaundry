# Glaundry
gLaundry is an integrated laundry management system with a lightweight and performant Hono backend and a modern Next.js frontend. Using TypeScript across the entire stack for consistency and reliability, gLaundry delivers a fast, secure, and easily scalable operational solution.
 
## main feature
- Customer Management (CRUD)
- Laundry Management (CRUD)
- Services Page
- About Page
- Contact Page
- Modern & Responsive UI(nextjs, shadcn, talwind)
- High-Performance Backend(hono, mongodb)

## Technology Used
### Backend
- Hono
- MongoDB
- TypeScript
- Zod 

### Frontend
- Next.js
- Tailwind CSS
- shadcn/ui
- TypeScript
- lucide

## folder structure

* Backend
serverLaundry/
│
└── src/
    ├── config/
    │   ├── db.collection.ts   # MongoDB collections
    │   ├── db.config.ts       # DB config
    │   └── db.connect.ts      # MongoDB connection logic
    │
    ├── modules/
    │   ├── customers/
    │   │   ├── customers.controller.ts   # Controller logic
    │   │   ├── customers.route.ts        # Routing with Hono
    │   │   ├── customers.service.ts      # Business logic
    │   │   ├── customers.types.ts        # TypeScript interfaces
    │   │   └── customers.validation.ts   # Zod validation
    │   │
    │   ├── laundries/
    │   │   ├── laundries.controller.ts
    │   │   ├── laundries.pipeline.ts     # MongoDB aggregation pipeline
    │   │   ├── laundries.route.ts
    │   │   ├── laundries.service.ts
    │   │   ├── laundries.types.ts
    │   │   └── laundries.validation.ts
    │
    ├── types/
    │   └── index.ts             # Shared types
    |
    |-- index.ts
    |-- route.ts                 # main routers

* Frontend
web-laundry/
│
├── app/
│   ├── (page)/
│   │   ├── customers/        # Customers CRUD pages
│   │   ├── info/             # About, Contact, Service, etc.
│   │   ├── laundries/        # Laundry CRUD pages
│   │   └── tech/             # (Optional) Technology / documentation page
│   │
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── favicon.ico
│   ├── not-found.tsx         # Custom 404 page
│   └── page.tsx              # Landing / homepage
│
├── components/
│   └── ui/
│       ├── app-sidebar.tsx   # Sidebar component
│       ├── app-table.tsx     # Table component
│       └── loading.tsx       # Loading UI
│
├── hooks/
│   ├── use-customers.tsx     # Hook for customers CRUD logic
│   ├── use-laundries.tsx     # Hook for laundry CRUD logic
│   └── use-mobile.ts         # Mobile detection hook


# installation and run

- install bun in backend and frontend
- cd serverLaundry
- set up .env
- bun run dev
- cd web-laundry
- bun run dev
- open http://localhost:3000 in browser

# api endpoint

* customers
GET    /api/customers
GET    /api/customers/:id
POST   /api/customers
PUT    /api/customers/:id
DELETE /api/customers/:id

* laundries
GET    /api/laundries
GET    /api/laundries/:id
POST   /api/laundries
PUT    /api/laundries/:id
DELETE /api/laundries/:id

***** MIT LICENSE *****

By:    Maz Ulex Galaxy
email: mazprom65@gmail.com
