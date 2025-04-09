/**
 * Rocket.tsx
 * 
 * Rocket ship page component displaying the rocket ship message.
 */

import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Rocket component - Shows the rocket ship page with the hello message
 */
export default function Rocket() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">🚀 Rocket Ship Page 🚀</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This is the second page of our React Router demo showing navigation between routes.
        </p>
      </div>
      
      <div className="flex justify-center mb-16">
        <Card className="w-full max-w-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2 shadow-lg">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl">Message from Space</CardTitle>
            <CardDescription>Important transmission received</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-6 pb-8">
            <div className="text-7xl mb-6 animate-bounce">🚀</div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl">
                <h2 className="text-3xl font-bold text-center tracking-wider">
                  Hello this is a rocket ship!
                </h2>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-2">
            <Button asChild variant="outline">
              <Link to={routes.landing.path}>
                ← Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">About This Demo</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>React Router</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This page demonstrates how React Router works by allowing navigation between different components without reloading the page.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>React Query</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Although this page doesn't make API calls, React Query is set up in this application for efficient data fetching and caching.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}