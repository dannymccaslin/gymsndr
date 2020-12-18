import React, { useEffect, useState } from 'react';
import {climbGrades, boulderGrades} from '../DataFiles/climbgrades';

const Route = ({location}) => {
    const routeId = location.state.id;
    const gymName = location.state.gymName.gymName;
    const [route,setRoute] = useState([]);
    var grade = '';

    useEffect(() => {
        fetch(`https://gymsendr.web.app/routes/${routeId}`)
            .then(res => res.json())
            .then(result => {
                setRoute(result)
            });

        if (route.grade >= 2000) {
            for (const bGrade in boulderGrades) {
                if (bGrade[value] === route.grade) {
                    grade = bGrade[hueco];
                }
            }
        } else {
            for (const cGrade in climbGrades) {
                if (cGrade[value] === route.grade) {
                    grade = cGrade[yds];
                }
            }
        }
    },[routeId])
    console.log(route);

    return (
        <div>
            <p>{route.routeName}</p>
            <p>{ route.grade >= 20000 ? climbGrades.}</p>
            <label>Route Color: </label><p>{route.color}</p>
            <p>Route set by {route.setter}</p>
            <p>More routes at {gymName}</p>
        </div>
        )
}

export default Route;
