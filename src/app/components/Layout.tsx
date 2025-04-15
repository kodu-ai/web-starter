/**
 * Layout.tsx
 *
 * Main layout component that wraps all pages in the application.
 * Includes navigation header and footer.
 */

import { ReactNode } from 'react';
import { Navbar1 } from './navbar';
import { Footer2 } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1
        logo={{
          url: '/',
          src: 'https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg',
          alt: 'React Router Demo',
          title: 'React Router + React Query',
        }}
        menu={[
          { title: 'Home', url: '/' },
          { title: 'Rocket', url: '/rocket' },
          {
            title: 'Resources',
            url: '#',
            items: [
              {
                title: 'React Router',
                description: 'Declarative routing for React applications',
                icon: <span className="text-xl">🚦</span>,
                url: 'https://reactrouter.com/en/main',
              },
              {
                title: 'React Query',
                description: 'Powerful asynchronous state management',
                icon: <span className="text-xl">📊</span>,
                url: 'https://tanstack.com/query/latest',
              },
              {
                title: 'shadcn/ui',
                description:
                  'Beautiful UI components built with Radix and Tailwind',
                icon: <span className="text-xl">🎨</span>,
                url: 'https://ui.shadcn.com/',
              },
              {
                title: 'Tailwind CSS',
                description: 'A utility-first CSS framework',
                icon: <span className="text-xl">🌈</span>,
                url: 'https://tailwindcss.com/',
              },
            ],
          },
        ]}
        auth={{
          login: { title: 'GitHub', url: 'https://github.com' },
          signup: { title: 'Documentation', url: '#' },
        }}
      />

      <main className="flex-grow">{children}</main>

      <Footer2
        logo={{
          url: '/',
          src: 'https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg',
          alt: 'React Router Demo',
          title: 'React Router + Query',
        }}
        tagline="A modern React application template"
        copyright="© 2025 React Router + React Query Demo. All rights reserved."
        menuItems={[
          {
            title: 'Resources',
            links: [
              { text: 'React Router', url: 'https://reactrouter.com' },
              { text: 'React Query', url: 'https://tanstack.com/query' },
              { text: 'shadcn/ui', url: 'https://ui.shadcn.com' },
              { text: 'Tailwind CSS', url: 'https://tailwindcss.com' },
              { text: 'Vite', url: 'https://vitejs.dev' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { text: 'Documentation', url: '#' },
              { text: 'API Reference', url: '#' },
              { text: 'Examples', url: '#' },
            ],
          },
          {
            title: 'Community',
            links: [
              { text: 'GitHub', url: 'https://github.com' },
              { text: 'Discord', url: '#' },
              { text: 'Twitter', url: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}
