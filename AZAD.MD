# AZAD AI AGENT MEMORY BANK

## Project Overview

This is a modern React web application built with a focus on component-based architecture, type safety, and developer experience. The project serves as a template/starter for building sophisticated web applications with modern technologies.

## Technology Stack

### Core Technologies

- **React 19**: The latest version of React with improved performance and features
- **TypeScript**: For type safety and improved developer experience
- **Vite**: Fast, modern build tool and development server
- **React Router 6**: For client-side routing and navigation
- **TanStack Query (React Query 5!)**: For data fetching, caching, and state management
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built with Radix UI primitives and Tailwind CSS

### Key Dependencies

- **Radix UI**: Accessible, unstyled UI components (accordion, dialog, navigation, etc.)
- **class-variance-authority**: For creating variant-based component styling
- **clsx & tailwind-merge**: For conditional class name handling and merging
- **React Hook Form**: Form handling with zod validation
- **Lucide React**: Icon library
- **date-fns**: Date utilities
- **Recharts**: Chart components
- **Sonner**: Toast notifications

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── app/             # Main application code
│   │   ├── components/  # App-specific components
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── pages/       # Page components
│   │   │   ├── Home.tsx
│   │   │   └── Rocket.tsx
│   │   ├── root.tsx     # Main router setup with React Router
│   │   └── routes.ts    # Route definitions
│   ├── assets/          # Application assets
│   ├── components/
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   │   └── use-mobile.ts
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── App.css          # Global styles
│   ├── App.tsx          # Default Vite template (not used)
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── .gitignore
├── components.json      # shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Application Architecture

### Routing

The application uses React Router 6 for client-side routing. Routes are defined in `src/app/routes.ts` and implemented in `src/app/root.tsx`. The current routes include:

- `/` - Home page
- `/rocket` - Rocket page (example second page)

Routes are typed with TypeScript for type safety, including properties like path, label, and navLabel (for navigation highlighting).

### Components

#### Layout Components

- **Layout**: Wraps all pages with consistent Navbar and Footer
- **Navbar1**: Responsive navigation bar with mobile and desktop layouts
- **Footer2**: Site footer with links and copyright information
- **Hero32**: Hero section for landing pages with heading, description, and call-to-action

#### Page Components

- **Home**: Landing page showcasing the technologies used
- **Rocket**: Example second page demonstrating React Router navigation

#### UI Components (shadcn/ui)

The application uses shadcn/ui components built with Radix UI primitives and styled with Tailwind CSS. These include:

- **Button**: With variants like default, destructive, outline, secondary, ghost, link
- **Card**: Composite component with subcomponents like CardHeader, CardContent, CardFooter
- **Accordion**: Collapsible content panels
- **Alert**: For notifications and alerts
- **Dialog**: Modal dialogs
- **Navigation Menu**: Dropdown menus for navigation
- And many more (50+ components available)

### State Management

- **Component State**: Local state using React's useState hook
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Form State**: React Hook Form with zod validation

### Styling

The application uses Tailwind CSS for styling with a consistent design system. Key styling patterns include:

- Utility classes for styling components
- Custom utility function `cn()` for merging class names
- Variant-based styling using class-variance-authority
- Container queries for responsive design
- Dark mode support through CSS variables

### Responsive Design

- Mobile-first approach with responsive layouts
- Custom hook `useIsMobile()` for detecting mobile viewport
- Different UI patterns for mobile and desktop views (e.g., sheet/drawer for mobile navigation)

### Performance Optimizations

- Code splitting with React.lazy and Suspense
- Configured React Query for efficient data fetching and caching
- SVG icons from Lucide React for reduced bundle size

## Coding Patterns and Best Practices

### Component Patterns

- **Composition**: Components are designed to be composable (e.g., Card and its subcomponents)
- **Props with Defaults**: Components provide sensible defaults while allowing customization
- **TypeScript Interfaces**: All component props are typed for safety and documentation

### Accessibility

- Radix UI primitives for accessible components
- ARIA attributes in markup
- Keyboard navigation support
- Focus management

### Code Organization

- Feature-based organization in the app folder
- Reusable UI components separated from application-specific components
- Custom hooks for shared logic
- Utility functions in lib directory

## Development Workflow

- Vite for fast development and building
- TypeScript for type checking
- ESLint for code linting
- Tailwind CSS for styling

## Key Capabilities for Azad AI Agent

When working with this codebase, the Azad AI agent should:

1. **Understand Component Structure**: Recognize the shadcn/ui pattern of composable components
2. **Follow TypeScript Patterns**: Maintain strict typing and interfaces for props
3. **Maintain Styling Conventions**: Use the `cn()` utility for class merging and follow Tailwind patterns
4. **Respect Routing Structure**: Add new routes to the routes.ts file when creating new pages
5. **Follow Existing Patterns**: When adding new features, follow the established patterns in the codebase
6. **Leverage React Hooks**: Use built-in React hooks and custom hooks appropriately
7. **Maintain Responsive Design**: Ensure all UI changes work on both mobile and desktop views

## Common Tasks and How to Approach Them

### Adding a New Page

1. Create a new component in `src/app/pages/`
2. Add a new route in `src/app/routes.ts`
3. Add the route to the Router in `src/app/root.tsx`
4. Link to the new page from navigation or other pages

### Adding a New Component

1. Create the component in the appropriate directory
   - UI components in `src/components/ui/`
   - App-specific components in `src/app/components/`
2. Use TypeScript interfaces for props
3. Follow the shadcn/ui pattern for component structure
4. Style with Tailwind CSS classes

### Modifying Styles

1. Use Tailwind CSS classes
2. For conditional classes, use the `cn()` utility
3. For variants, use class-variance-authority

### Adding New Data Fetching

1. Use React Query 5 for data fetching
2. Set up a query in the component or a custom hook
3. Handle loading and error states
4. Consider caching configuration

### Home Page Default

```homepage.tsx
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
```

### Rocket Page Default

```rocket.tsx
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
```

### Navbar Default

```navbar.tsx
import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: 'https://www.shadcnblocks.com',
    src: 'https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg',
    alt: 'logo',
    title: 'Shadcnblocks.com',
  },
  menu = [
    { title: 'Home', url: '#' },
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: 'Blog',
          description: 'The latest industry news, updates, and info',
          icon: <Book className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Company',
          description: 'Our mission is to innovate and empower the world',
          icon: <Trees className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Careers',
          description: 'Browse job listing and discover our workspace',
          icon: <Sunset className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Support',
          description:
            'Get in touch with our support team or visit our community forums',
          icon: <Zap className="size-5 shrink-0" />,
          url: '#',
        },
      ],
    },
    {
      title: 'Resources',
      url: '#',
      items: [
        {
          title: 'Help Center',
          description: 'Get all the answers you need right here',
          icon: <Zap className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Contact Us',
          description: 'We are here to help you with any questions you have',
          icon: <Sunset className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Status',
          description: 'Check the current status of our services and APIs',
          icon: <Trees className="size-5 shrink-0" />,
          url: '#',
        },
        {
          title: 'Terms of Service',
          description: 'Our terms and conditions for using our services',
          icon: <Book className="size-5 shrink-0" />,
          url: '#',
        },
      ],
    },
    {
      title: 'Pricing',
      url: '#',
    },
    {
      title: 'Blog',
      url: '#',
    },
  ],
  auth = {
    login: { title: 'Login', url: '#' },
    signup: { title: 'Sign up', url: '#' },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
```

### Footer Default

```footer.tsx
interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: 'https://www.shadcnblocks.com/images/block/block-1.svg',
    alt: 'blocks for shadcn/ui',
    title: 'Shadcnblocks.com',
    url: 'https://www.shadcnblocks.com',
  },
  tagline = 'Components made easy.',
  menuItems = [
    {
      title: 'Product',
      links: [
        { text: 'Overview', url: '#' },
        { text: 'Pricing', url: '#' },
        { text: 'Marketplace', url: '#' },
        { text: 'Features', url: '#' },
        { text: 'Integrations', url: '#' },
        { text: 'Pricing', url: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', url: '#' },
        { text: 'Team', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Contact', url: '#' },
        { text: 'Privacy', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help', url: '#' },
        { text: 'Sales', url: '#' },
        { text: 'Advertise', url: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { text: 'Twitter', url: '#' },
        { text: 'Instagram', url: '#' },
        { text: 'LinkedIn', url: '#' },
      ],
    },
  ],
  copyright = '© 2024 Shadcnblocks.com. All rights reserved.',
  bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
```

### Hero Default

```hero.tsx
import { Button } from "@/components/ui/button";

interface Integration {
  id: string;
  icon: React.ReactNode;
}

interface Hero32Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const Hero32 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Fully decomposable components, all the images and background patterns are individual images or svgs that can be replaced.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  integrations = [
    [
      {
        id: "integration-1",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-2",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-3",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
      {
        id: "integration-4",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-4.svg"
          />
        ),
      },
      {
        id: "integration-5",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-5.svg"
          />
        ),
      },
    ],
    [
      {
        id: "integration-6",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-6.svg"
          />
        ),
      },
      {
        id: "integration-7",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-8",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-9",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
      {
        id: "integration-10",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-4.svg"
          />
        ),
      },
    ],
    [
      {
        id: "integration-11",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-5.svg"
          />
        ),
      },
      {
        id: "integration-12",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-6.svg"
          />
        ),
      },
      {
        id: "integration-13",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-1.svg"
          />
        ),
      },
      {
        id: "integration-14",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-2.svg"
          />
        ),
      },
      {
        id: "integration-15",
        icon: (
          <img
            alt="Integration"
            src="https://www.shadcnblocks.com/images/block/block-3.svg"
          />
        ),
      },
    ],
  ],
}: Hero32Props) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative">
        <div className="relative container flex flex-col items-start md:flex-row md:items-center md:-space-x-26">
          <div className="z-20 -mx-4 w-full shrink-0 bg-background px-4 pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
                  {heading}
                </h1>
                <p className="text-muted-foreground">{description}</p>
                <Button asChild size="lg" className="mt-10">
                  <a href={button.url}>{button.text}</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pt-12 pb-8 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-22 odd:-translate-x-22">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-22 rounded-xl border border-background bg-background shadow-xl"
                    >
                      <div className="h-full w-full bg-muted/20 p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero32 };
```

### Layout Default

```layout.tsx
/**
 * Layout.tsx
 *
 * Main layout component that wraps all pages in the application.
 * Includes navigation header and footer.
 */

import { ReactNode } from 'react';
import { Navbar1 } from './Navbar.tsx';
import { Footer2 } from './Footer.tsx';

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
```
