import React, {useContext} from 'react';
import {UserContext} from '../providers/UserProvider';
import { Link } from "@reach/router";


const TopMenu = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h3>gymsendr</h3>
            <Link  
            to="signin"
            >{ user ? `Hello ${user.displayName}` : "Sign In/Sign Up"}
            </Link>
          </div>
    )
}
export default TopMenu;