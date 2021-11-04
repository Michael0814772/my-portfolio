import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
