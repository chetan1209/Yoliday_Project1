# Yoliday Dashboard

A responsive web dashboard built with Next.js, TypeScript, and Node.js.

## Project Structure

```
yoliday-dashboard/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Next.js pages
│   │   ├── styles/         # Global styles and Tailwind config
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   └── public/             # Static assets
│
└── backend/                 # Node.js backend application
    ├── src/
    │   ├── controllers/    # Route controllers
    │   ├── models/         # Database models
    │   ├── routes/         # API routes
    │   ├── services/       # Business logic
    │   └── utils/          # Utility functions
    └── prisma/             # Database schema and migrations
```

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- React Hook Form
- React Router DOM

### Backend
- Node.js
- Express
- TypeScript
- MySQL
- Prisma ORM

## Getting Started

### Prerequisites
- Node.js 18+
- MySQL 8+
- npm or yarn

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Responsive dashboard layout
- Project management
- Real-time search and filtering
- Cart functionality
- Form validation
- Authentication
- Database integration

## API Endpoints

### Projects
- GET /api/projects - List all projects
- POST /api/projects - Create a new project
- GET /api/projects/:id - Get project details
- PUT /api/projects/:id - Update project
- DELETE /api/projects/:id - Delete project

### Cart
- GET /api/cart - Get cart items
- POST /api/cart - Add item to cart
- DELETE /api/cart/:id - Remove item from cart

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 