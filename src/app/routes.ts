/**
 * routes.ts
 * 
 * This file defines the routes configuration for the application using React Router 6.
 * Each route represents a different page or view in the application.
 */

/**
 * Route object type definition
 */
export type Route = {
  path: string;
  label: string;
  // Used for navigation highlighting
  navLabel?: string;
};

/**
 * Application routes
 */
export const routes = {
  // Landing page route
  landing: {
    path: '/',
    label: 'Home',
    navLabel: 'Home',
  },
  // Rocket ship page route
  rocket: {
    path: '/rocket',
    label: 'Rocket Ship',
    navLabel: 'Rocket',
  },
} as const;

/**
 * Get all routes as an array
 */
export const getRoutes = (): Route[] => Object.values(routes);