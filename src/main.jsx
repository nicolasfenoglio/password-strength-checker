import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import MainLayout from './features/layout/MainLayout';
import Home from './app/Home';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </StrictMode>,
);
