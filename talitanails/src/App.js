import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home'
// import about from './pages/about'
// import projects from './pages/projects'
// import contact from './pages/contact'

function App(){
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path= '/' exact component={home}/>
          {/* <Route path= '/about' component={about}/>
          <Route path= '/projects' component={projects}/>
          <Route path= '/contact' component={contact}/> */}
        </Switch>
        {/* <Footer />  */}
      </Router>
      
    </>
  );
};

export default App;
