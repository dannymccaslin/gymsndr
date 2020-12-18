import React, {useContext} from "react";
import Application from "./Components/Application";
import UserProvider, { UserContext } from "./providers/UserProvider";
import Gyms from './Components/Gyms';
import Routes from './Components/Routes';
import Route from './Components/Route';
import AddRoute from './Components/AddRoute';
import { Link } from "@reach/router";
import { Router } from "@reach/router";


function App() {
  const user = useContext(UserContext);
  
  return (
    <UserProvider>
      <Link  
          to="signin"
        >{user.displayName ? `Hello ${user.displayName}` : "Sign In/Sign Up"}
          </Link>
      <p>This is a place where you can track gym climbing. {user.displayName}</p>
      <Router>
        <Routes path='routes' />
        <Route path='route' />
        <AddRoute path='addroute' />
        <Gyms path="/"/>
        <Application path="signin" />
        
      </Router>
    </UserProvider>
    
  );
}

export default App;
