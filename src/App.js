import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';



function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
