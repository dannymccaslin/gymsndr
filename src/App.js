import React, {useContext} from "react";
import Application from "./Components/Application";
import UserProvider, { UserContext } from "./providers/UserProvider";
import Gyms from './Components/Gyms';
import Routes from './Components/Routes';
import Route from './Components/Route';
import AddRoute from './Components/AddRoute';
import TopMenu from './Components/TopMenu';
import { Router } from "@reach/router";



function App() {
  const user = useContext(UserContext);
  
  return (
    <UserProvider>
      
      <TopMenu />
      <Router>
        <Routes path='routes' />
        <Route path='route' />
        <AddRoute path='addroute' />
        <Gyms path="/"/>
        <Application path="auth/*" />
        
      </Router>
    </UserProvider>
    
  );
}

export default App;
