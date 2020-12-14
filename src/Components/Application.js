import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import Gyms from './Gyms';
import Routes from './Routes';
import Route from './Route';
import AddRoute from './AddRoute';
import { UserContext } from "../providers/UserProvider";

function Application() {
  const user = useContext(UserContext);

  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
      <Gyms path="gyms" />
      <Routes path='routes' />
      <Route path='route' />
      <AddRoute path='addroute' />

    </Router>
  );
}
export default Application;
