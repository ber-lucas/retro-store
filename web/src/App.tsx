import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
