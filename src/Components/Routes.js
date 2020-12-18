import React, { useEffect, useState, useContext } from 'react';
import { Link } from '@reach/router';
import { UserContext } from "../providers/UserProvider";

const Routes = ({ location }) => {
    const user = useContext(UserContext);

    const [routeData, setRouteData] = useState([]);
    const gymId = location.state.id.gymId;
    const gymName = location.state.name.gymName;

    useEffect(() => {
        var newRoutes = [];
        fetch(`https://gymsendr.web.app/gyms/routes/${gymId}`)
            .then(res => res.json())
            .then(result => {
                result.forEach(res => {
                newRoutes.push({
                    id: res.id,
                    name: res.data.routeName,
                    grade: res.data.grade,
                    isActive: res.data.isActive
                })
                })
                setRouteData(newRoutes);
            })
    },[gymId])

    return (
        <div>
            <h1>Routes at {gymName}</h1>
            {routeData.map(route => {
                return (
                    <div key={route.id}>
                    <Link 
                        to="../route"
                        state={{id: route.id, gymName: {gymName}}}
                        >{route.name}, {route.grade}</Link>
                        <br />
                    </div>
                )
            })}
            <br />
            { user && user.isSetter && user.setterGyms.includes(gymId) ? 
            <Link
                to="../addroute"
                state={{gymId: {gymId}, gymName: {gymName}}}
                >
                    Add a New Route at this gym
                </Link>
                : <div/>
            }
        </div>
    )
}
export default Routes;

