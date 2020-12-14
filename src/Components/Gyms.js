import React, { useEffect, useState } from 'react';
import GymData from './GymData';

const Gyms = () => {
    const [gyms, setGyms ] = useState([])
    useEffect((gyms) => {
        var gymData = [];
        fetch('https://gymsendr.web.app/gyms')
            .then(res => res.json())
            .then(result => {
                result.forEach(res => {
                    gymData.push({
                        id: res.id,
                        name: res.data.name
                    })
                })
                setGyms(gymData);
            });
    }, [])

    return (
        <div>
            <p>Gyms</p>
            {gyms.map(gym => {
                return (
                    <GymData key={gym.id} gymId={gym.id} />
                // <Link key={gym.id}
                //     to='routes'
                //     className="text-blue-500 hover:text-blue-600">
                //         {gym.name}
                //     </Link>
                )
            })}
        </div>
    )
}
export default Gyms;