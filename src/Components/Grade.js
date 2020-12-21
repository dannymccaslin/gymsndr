import React, { useEffect, useState } from 'react';
import {climbGrades, boulderGrades} from '../DataFiles/climbgrades';


const Grade = (props ) => {
    const gradeNumber = props.gradeNumber;
    const [grade, setGrade] = useState('');

    const setClimbingGrade = (climbingGrade) => {
        console.log(`declared climbing grade is ${climbingGrade}`);

        if (climbingGrade >= 20000) {
            for (const bGrade in boulderGrades) {
                if (bGrade.value === gradeNumber) {
                    return bGrade.hueco;
                }
            }
        } else {
            climbGrades.forEach( function (arrayItem) {
                if (arrayItem.value === climbingGrade) {
                    console.log(arrayItem.yds);
                    setGrade(arrayItem.yds);
                }
               
            })      
        }
    };

    useEffect( () => {
        setClimbingGrade(gradeNumber);
    }, [gradeNumber])

    return (
        <div>
            <p>{grade}</p>
        </div>
    )
}
export default Grade;