/**
 * Home.tsx
 *
 * Landing page component for the application.
 */

import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Hero32 } from '../components/Hero';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

/**
 * Home component - Landing page for the application.
 */
export default function Home() {
  return (
    <div>
      <Hero32
        heading="React Router + React Query Demo"
        description="A modern React application template using React Router v6 for routing and TanStack Query for data fetching. Built with TypeScript, TailwindCSS and shadcn/ui components."
        button={{
          text: 'Explore the Rocket Page',
          url: '/rocket',
        }}
        integrations={[
          [
            {
              id: 'react',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <img
                    alt="React"
                    src="/src/assets/react.svg"
                    className="h-10 w-10 mb-1"
                  />
                  <span className="text-xs font-medium">React 19</span>
                </div>
              ),
            },
            {
              id: 'typescript',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <span className="text-2xl font-semibold mb-1">TS</span>
                  <span className="text-xs font-medium">TypeScript</span>
                </div>
              ),
            },
            {
              id: 'router',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <span className="text-2xl mb-1">🚦</span>
                  <span className="text-xs font-medium">React Router</span>
                </div>
              ),
            },
          ],
          [
            {
              id: 'query',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <span className="text-2xl mb-1">📊</span>
                  <span className="text-xs font-medium">React Query</span>
                </div>
              ),
            },
            {
              id: 'tailwind',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <span className="text-2xl mb-1">🌈</span>
                  <span className="text-xs font-medium">TailwindCSS</span>
                </div>
              ),
            },
            {
              id: 'vite',
              icon: (
                <div className="flex flex-col items-center justify-center w-full h-full p-2">
                  <span className="text-2xl mb-1">⚡</span>
                  <span className="text-xs font-medium">Vite</span>
                </div>
              ),
            },
          ],
        ]}
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technologies Used in This Template
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚦</span> React Router v6
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Declarative routing for React applications. The standard routing
                library for React that allows you to build a single-page
                application with navigation without page refreshes.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://reactrouter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span> React Query
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Powerful data synchronization for React. Fetch, cache,
                synchronize and update server state in your React applications
                with ease, while maintaining a great developer experience.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://tanstack.com/query/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span> shadcn/ui
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible, customizable, and open source. Built on
                Radix UI and styled with Tailwind CSS.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to={routes.rocket.path}>Check Out the Rocket Ship Page</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
