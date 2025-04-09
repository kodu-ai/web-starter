/**
 * root.tsx
 *
 * This file configures React Router 6 for the application.
 * It serves as the main router component and renders different pages based on the URL.
 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Lazy-load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Rocket = lazy(() => import('./pages/Rocket'));

// Loading component for suspense fallback
const Loading = () => (
  <div className="loading">
    <p>Loading...</p>
  </div>
);

// Loading component for suspense fallback
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="text-center">
      <div className="animate-spin size-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

/**
 * Root component that sets up routing for the application
 */
export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path={routes.landing.path} element={<Home />} />
              <Route path={routes.rocket.path} element={<Rocket />} />
              <Route
                path="*"
                element={
                  <div className="container mx-auto py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      404 - Page Not Found
                    </h2>
                    <p className="mb-8 text-muted-foreground">
                      The page you are looking for doesn't exist.
                    </p>
                    <Link
                      to={routes.landing.path}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      Go to Home
                    </Link>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
