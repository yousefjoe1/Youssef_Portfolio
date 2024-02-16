import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(

    <HashRouter>
    <App />
    </HashRouter>

  );