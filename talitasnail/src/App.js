import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
import about from './pages/about'
import nailblog from './pages/nailblog'
import contact from './pages/contact'
import appointment from './pages/appointment'


function App(){
 
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path= '/' exact component={home}/>
          <Route path= '/about' component={about}/>
          <Route path= '/nailblog' component={nailblog}/>
          <Route path= '/contact' component={contact}/>
          <Route path= 'appointment' component={appointment}/>
          
        </Switch>
        {/* <Footer />  */}
      </Router>
    </>
  );
};

export default App;
