#gLaundry 🧺 
A modern laundry management system with a split architecture between the Hono backend (TypeScript + MongoDB) and the Next.js frontend (Tailwind + shadcn/ui).

#Features
- Customer Management (CRUD)

Create, read, update, and delete customer records with ease. Designed to support efficient data organization, quick lookups, and smooth customer onboarding.

- Laundry Management (CRUD)

Perform full CRUD operations for laundry items or service orders. Track order details, processing status, pricing, and delivery information in a structured and intuitive interface.

- Services Page

A dedicated page that showcases all available laundry services, including descriptions, pricing details, and bundled packages. Optimized to help users quickly understand service offerings.

- Discount & Promotion Notifications

Highlight active discounts, promotions, and seasonal offers directly within the Services page. Ensures customers stay informed and engaged with current deals.

🔹 About Page

Provides a clear, professional overview of your business identity — mission, values, experience, and the story behind gLaundry.

- Contact Page

A simple and accessible page for users to reach your team. Includes contact forms, business email, location details, or WhatsApp links (if desired).

- Responsive Modern UI

Built with Next.js, Tailwind CSS, and shadcn/ui to deliver a fast, elegant, and mobile-friendly user experience across all devices.

- Fast & Scalable Backend

Powered by Hono + MongoDB + TypeScript, ensuring high performance, clean API structure, and easy extensibility for future improvements.

- Consistent Full-Stack TypeScript

Both backend and frontend use TypeScript, enhancing reliability, maintainability, and overall developer productivity.

# Structur

##backend
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


##frontend
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
    │
    └── utils/                   # Helper functions
    |
    |--- index.ts
    |--- route.ts                # main routers

    # installation & runtime
    bun install(in server and web)
    cd server laundry
    setup env
    bun run dev
    cd web-laundry
    bun run dev
    opon localhost:3000

    #api endpoint
    GET /api/customers
    GET /api/customers/:id 
    POST /api/customers
    PUT /api/customers/:id 
    DELETE /api/customers/:id 

    GET /api/laundries
    GET /api/laundries/:id 
    POST /api/laundries
    PUT /api/laundries/:id 
    DELETE /api/laundries/:id

    #license
    MIT

    AUTHOR
    name: MAZ ULEX
    email: mazprom65@gmail.com
    
