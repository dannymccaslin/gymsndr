import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import Accordion from './Accordion';

const GymData = (props) => {
    const gymId = props.gymId;
    const [gymName,setGymName] = useState('');
    const [address, setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch(`https://gymsendr.web.app/gyms/${gymId}`)
            .then(res => res.json())
            .then(result => {
                setGymName(result.name);
                setAddress(result.address);
                setCity(result.city);
                setState(result.state);
                setZip(result.zip);
                setPhone(result.phone);
                setUrl(result.website);
            })

    },[])

    

    return (
        <div>
        <Accordion
            title={gymName}
            content={`<div>
                <p>${address}</p>
                <p>${city},${state}, ${zip}</p>
                <p>${phone}</p>
                <a href=${url} target="_blank" class="my-2 text-blue-700 hover:text-blue-800 ">${url}</a><br/>
                
                </div> `}/>
        <Link 
        to='../routes'
        state={{id: {gymId}, name: {gymName}}}
        className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
            Routes at {gymName}
        </Link>
                </div>
    )

}
export default GymData;

