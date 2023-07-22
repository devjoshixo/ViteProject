import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import LoginState from './context/Login/LoginState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginState>
);
