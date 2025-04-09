# React Router + React Query Demo

This is a modern React application template demonstrating the integration of React Router v6 and TanStack Query (React Query), built with shadcn/ui components and TailwindCSS.

## Technologies Used

- **React 19**: The latest version of the popular JavaScript library for building user interfaces
- **TypeScript**: Adds static typing to JavaScript for better developer experience and code quality
- **Vite**: Next-generation frontend build tool offering faster development experience
- **React Router v6**: Declarative routing for React applications
- **TanStack Query (React Query)**: Data fetching and state management library for handling server state
- **TailwindCSS**: Utility-first CSS framework for rapidly building custom designs
- **shadcn/ui**: High-quality, accessible, and customizable React components built with Radix UI and Tailwind CSS

## Features

- **Modern Routing**: Demonstrates React Router v6 with route configuration and navigation
- **Lazy Loading**: Components are loaded asynchronously for better performance
- **Data Management**: Ready-to-use React Query setup for data fetching and caching
- **Responsive Design**: Mobile-friendly layout with responsive components
- **Dark Mode Support**: Compatible with light and dark themes via shadcn/ui
- **TypeScript Integration**: Full type safety throughout the application

## Running the Application

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd web-starter
   ```

2. Install dependencies
   ```bash
   npm install
   # or if you use pnpm
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── app/              # Application core components
│   │   ├── components/   # Shared components used across pages
│   │   ├── pages/        # Route components
│   │   ├── routes.ts     # Route definitions
│   │   └── root.tsx      # Root component with router setup
│   ├── components/       # UI components (shadcn/ui)
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions and helpers
│   ├── App.tsx           # Legacy entry component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .gitignore            # Git ignore file
├── components.json       # shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Routes

The application has the following routes:
- `/` - Home page with project overview and technologies used
- `/rocket` - Rocket Ship page with "Hello this is a rocket ship!" message

## React Router v6

This template uses React Router v6 for routing. The router configuration is located in `src/app/root.tsx` and route definitions are in `src/app/routes.ts`.

Key React Router features demonstrated:
- `BrowserRouter` for browser-based routing
- `Routes` and `Route` for defining routes
- `Link` component for navigation
- Lazy loading with Suspense for code splitting

## React Query (TanStack Query)

TanStack Query is set up in this template for efficient data fetching and state management. The configuration is in `src/app/root.tsx`.

The QueryClient is configured with:
- 5-minute stale time for queries
- Disabled automatic refetching on window focus
- Ready to use for any API calls you want to add

## shadcn/ui Components

This template leverages shadcn/ui components for a polished user interface. These components are:
- Fully accessible
- Built on Radix UI primitives
- Styled with TailwindCSS
- Customizable to match your brand

## Customization

- **Styling**: Edit the TailwindCSS configuration in `tailwind.config.js` to match your design system
- **Routes**: Modify `src/app/routes.ts` to add or change application routes
- **Components**: Add new shadcn/ui components or customize existing ones in the `src/components/ui` directory

## License

MIT