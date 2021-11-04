import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Projects from './components/Projects';



function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path='./' components={Home}/>
          <Route path='./about' components={About}/>
          <Route path='./blog' components={Blog}/>
          <Route path='./contact' components={Contact}/>
          <Route path='./projects' components={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
