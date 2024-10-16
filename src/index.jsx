import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from "./MyApp"

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);