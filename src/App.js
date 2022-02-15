import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Course from './Pages/Course'
import Navbar from './component/Navbar'
import Footer from './component/Footer';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/course" component={Course}></Route>
          <Route exact path="/project" component={Project}></Route>
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
