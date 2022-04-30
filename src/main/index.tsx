import React from 'react';
import Home from '@/presentation/pages/Home/Home';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('main');
const root = createRoot(container);
root.render(<Home />);
