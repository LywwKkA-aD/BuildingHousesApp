import React, { useState } from 'react';
import { Card, Typography, Input, Textarea, Button } from "@material-tailwind/react";

const HouseCardComponent = ({ house }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedHouse, setUpdatedHouse] = useState(house);

    const handleInputChange = (field) => (event) => {
        const numericFields = ['bedrooms', 'floors', 'full_pricing', 'no_full_pricing', 'total_area'];
        const value = numericFields.includes(field) ? parseFloat(event.target.value) : event.target.value;
    
        setUpdatedHouse({
            ...updatedHouse,
            [field]: value
        });
    }    

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSubmitClick = async () => {
        try {
            const response = await fetch(`http://localhost:3001/houses/${updatedHouse.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedHouse)
            });

            if (response.ok) {
                setIsEditing(false);
            } else {
                console.error("Failed to update house.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <Card className="m-4 p-5">
            <Typography variant="h4" className="mb-4">{updatedHouse.name}</Typography>
            {isEditing ? (
                <>
                    <Input
                        type="text"
                        label="Name"
                        value={updatedHouse.name}
                        onChange={handleInputChange('name')}
                    />
                    <Textarea
                        label="Description"
                        value={updatedHouse.description}
                        onChange={handleInputChange('description')}
                    />
                    <Input
                        type="number"
                        label="Bedrooms"
                        value={updatedHouse.bedrooms}
                        onChange={handleInputChange('bedrooms')}
                    />
                    <Input
                        type="number"
                        label="Floors"
                        value={updatedHouse.floors}
                        onChange={handleInputChange('floors')}
                    />
                    <Input
                        type="number"
                        label="Full Pricing"
                        value={updatedHouse.full_pricing}
                        onChange={handleInputChange('full_pricing')}
                    />
                    <Input
                        type="number"
                        label="No Full Pricing"
                        value={updatedHouse.no_full_pricing}
                        onChange={handleInputChange('no_full_pricing')}
                    />
                    <Input
                        type="number"
                        label="Total Area"
                        value={updatedHouse.total_area}
                        onChange={handleInputChange('total_area')}
                    />
                    <Button color="green" onClick={handleSubmitClick}>Submit</Button>
                </>
            ) : (
                <>
                <div className="bg-white max-w-xs p-4 rounded-lg shadow-md border border-gray-200">
                    <Typography className="mb-2 font-bold">{`Bedrooms: ${updatedHouse.bedrooms}`}</Typography>
                    <Typography className="mb-2">{updatedHouse.description}</Typography>
                    <Typography className="mb-2 font-bold">{`Floors: ${updatedHouse.floors}`}</Typography>
                    <Typography className="mb-2 font-bold">{`Full Pricing: ${updatedHouse.full_pricing}`}</Typography>
                    <Typography className="mb-2 font-bold">{`No Full Pricing: ${updatedHouse.no_full_pricing}`}</Typography>
                    <Typography className="mb-2 font-bold">{`Total Area: ${updatedHouse.total_area}`}</Typography>
                    <Button color="green" onClick={handleEditClick} className="mt-4">Edit</Button>
                </div>
            
                </>
            )}
        </Card>
    );
}

export default HouseCardComponent;
