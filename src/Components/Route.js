import React, { useEffect, useState } from 'react';

const Route = ({location}) => {
    const routeId = location.state.id;
    const gymName = location.state.gymName.gymName;
    const [route,setRoute] = useState([]);

    useEffect(() => {
        fetch(`https://gymsendr.web.app/routes/${routeId}`)
            .then(res => res.json())
            .then(result => {
                setRoute(result)
            }) 
    },[routeId])
    console.log(route);

    return (
        <div>
            <p>{route.routeName}</p>
            <p>{route.grade}</p>
            <label>Route Color: </label><p>{route.color}</p>
            <p>Route set by {route.setter}</p>
            <p>More routes at {gymName}</p>
        </div>
        )
}

export default Route;
