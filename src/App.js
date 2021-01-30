import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Navbar from './Component/Home/Navbar/Navbar';

function App() {
  return (
   <>
   <Router>
   <Navbar/>
     <Switch>
       <Route exact path='/'>
         <Home/>
        
       </Route>
   
     </Switch>
   </Router>
   </>
  );
}

export default App;
