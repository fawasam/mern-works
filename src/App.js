import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/add-user" component={AddUser}/>
      <Route exact path="/all-user" component={AllUser}/>
      <Route exact path="/edit/user:id" component={EditUser}/>
      <Route component={NotFound}/>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
