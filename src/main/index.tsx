import React from 'react';
import Home from '@/presentation/pages/Home/Home';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('main');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home />);
