import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeProvider } from './context/DarkModeProvider'
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkModeProvider>
    <Router>
      <App />
    </Router>
  </DarkModeProvider>

);