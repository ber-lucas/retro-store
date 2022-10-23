import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import "./styles/main.css";

import { LoginProvider } from './Context/LoginContext'

function App() {
  return (
    <LoginProvider>
      <Router>      
        <Routes />
      </Router>
    </LoginProvider>
  );
}

export default App;
