import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/*** Added support for React 18 */
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);