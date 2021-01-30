import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Navbar from './Component/Home/Navbar/Navbar';
import SecondCompo from './Component/Home/SecondComponent/SecondCompo';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
     <Switch>
       <Route path='/home'>
         <Home/>
        
       </Route>
   
     </Switch>
   </Router>
   </>
  );
}

export default App;
