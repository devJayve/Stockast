import App from './App';
import { createRoot } from 'react-dom/client';
import './globals.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
