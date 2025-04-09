import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Root from './app/root.tsx';

// Mount the app with React Router configuration
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
