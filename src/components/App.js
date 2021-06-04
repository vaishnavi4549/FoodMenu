import Home from './Home';
import Header from './Header';
import './App.css';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Sweets from './Sweets';
import Navbar from './Navbar';
import './navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header className="header"/>
        <Navbar/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/breakfast" component={Breakfast}/>
          <Route path="/lunch" component={Lunch}/>
          <Route path="/sweets" component={Sweets}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
