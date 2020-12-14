import React, {useEffect, useState} from 'react';
import { climbGrades, boulderGrades} from '../DataFiles/climbgrades';


const climbTypes = ['toprope','sport','boulder'];

const AddRoute = ({location}) => {
    const gymId = location.state.gymId.gymId;
    const gymName = location.state.gymName.gymName;
    const [climbType, setClimbType] = useState('sport');
    const [grades, setGrades] = useState('climb');
    const [formState, setFormState] = useState({
        routeName: '',
        color: '',
        grade: '',
        gymId: gymId,
        isActive: true,
        type: climbType,
        setter: '',
        description: ''
    })
    var fileList = [];
    var newRouteId = '';
    useEffect(() => {
        if(climbType === 'boulder') {
            setGrades('boulder')
            console.log("Changing grade to boulder");
        } else {
            setGrades('climb');
            console.log("changing grade to climb");
        }
    }, [climbType])

    const handleUpload = async () => {
        console.log(formState);
        const response = await fetch('https://gymsendr.web.app/routes/add/', {
            method: 'post',
            body: JSON.stringify(formState),
        });
        const json = await response.json();
        console.log(json);
        // .then(function(response) {
        //     newRouteId = response;
        //     console.log(newRouteId);
        //     return response;
        // }).then(function(data) {
        //     console.log('Greated Route: ', data);
        // });
    };

    const fileAddHandler = event => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            fileList.push(`images[${i}]`, files[i]);
        }
        formState.files = fileList;
    }
    const changeClimbType = (e) => {
        setClimbType(e.target.value);
        handleChange(e);
    }
    const handleChange= (evt) => {
        const value = evt.target.value;
        setFormState({
            ...formState,
            [evt.target.name]: value
        });
        console.log(formState);
    };

    return (
        <div>
            
                <label htmlFor="routeName">Route Name</label><br />
                <input type="text" name="routeName" onChange={handleChange}/><br />
                <label htmlFor="type">Type</label><br />
                <select defaultValue={climbType} name="type" onChange={option => {changeClimbType(option)} }>
                        {climbTypes.map(type => {
                            return(
                                <option key={type} value={type}>{type}</option>
                                )
                        })}
                </select><br />
                <label htmlFor="grade">Grade</label><br />
                <select name="grade" onChange={handleChange}>
                    { grades === 'boulder' ?
                        boulderGrades.map(grade => {
                            return (
                                <option key={grade.value} value={grade.value}>{grade.hueco}</option> 
                            )
                        })
                        :
                        climbGrades.map(grade => {
                            return(
                                <option key={grade.value} value={grade.value}>{grade.yds}</option>
                            )
                        })

                    }
                </select><br />
                <label htmlFor="color">Color</label><br />
                <input type="text" name="color" onChange={handleChange} /><br />
                <label htmlFor="gymId">Gym</label><br />
                <input type="text" name="gymId" value={gymName} disabled={true}/><br />
                <label htmlFor="setter">Setter</label><br />
                <input type="text" name="setter" onChange={handleChange}/><br />
                <label htmlFor="description">Description</label><br />
                <textarea name="description" onChange={handleChange}/><br />

                    <label htmlFor="file-input">Upload Pictures</label><br />
                    <input type="file" name="fileinput"  multiple={true} onChange={fileAddHandler}/><br/>
                <button type="button" onClick={handleUpload}>Add Route</button><br />

        </div>
    )

}
export default AddRoute;