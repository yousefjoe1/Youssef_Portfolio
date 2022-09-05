import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(

    <HashRouter>
    <App />

    </HashRouter>

  );

// const root = createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <App />
// );