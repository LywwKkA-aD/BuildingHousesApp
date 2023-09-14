import React, { useState, useEffect } from 'react';
import HouseCardComponent from '../HouseCard/HouseCard.Component';  // Make sure the path is correct!

const HouseListComponent = () => {
    const [houses, setHouses] = useState([]);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        Promise.all([fetch('http://localhost:3001/houses'), fetch('http://localhost:3001/plans')])
            .then(([housesResponse, plansResponse]) => {
                if (!housesResponse.ok) {
                    throw new Error(`HTTP error! Status: ${housesResponse.status}`);
                }
                if (!plansResponse.ok) {
                    throw new Error(`HTTP error! Status: ${plansResponse.status}`);
                }
                return Promise.all([housesResponse.json(), plansResponse.json()]);
            })
            .then(([housesData, plansData]) => {
                setHouses(housesData);
                setPlans(plansData);
            })
            .catch(error => {
                console.error("Error fetching data from Firebase:", error);
            });
    }, []);

    return (
        <div className="flex flex-wrap">
            {houses.map((house) => (
                <HouseCardComponent key={house.house_id} house={house} />
            ))}
        </div>
    );
}

export default HouseListComponent;
