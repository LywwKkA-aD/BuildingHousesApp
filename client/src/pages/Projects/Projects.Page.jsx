import '../../App.css';
import ProjectsComponent from '../../components/Projects/Project.Component';
import React, { useState, useEffect } from 'react';
import { Button, Input, Slider } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const ProjectsPage = () => {
  const [minFloors, setMinFloors] = useState(0);
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(200);
  const [houses, setHouses] = useState([]); // Initially an empty array

  useEffect(() => {
      fetch('http://localhost:3001/houses')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              setHouses(data);
          })
          .catch(error => {
              console.error("Error fetching houses:", error);
          });
  }, []); // Run once when component mounts
  

  const filteredHouses = houses.filter((house) => {
      return (
          house.floors >= minFloors &&
          house.bedrooms >= minBedrooms &&
          house.total_area >= minArea &&
          house.total_area <= maxArea
      );
  });
return (
  <div className='flex flex-col justify-center'>
      <div className='mx-auto flex flex-col my-10 max-w-screen-2xl'>
          <div className='flex flex-col justify-center items-center'>
              <h2 className='my-2 text-4xl text font-extralight inline-block'>Проекты</h2>
              <div className='underline-2-3 mb-4'></div>
              <p className='text-center max-w-2xl'>
                    Готовые решения для вас и вашей фантазии...
              </p>
          </div>
      </div>
      <div className='flex flex-wrap justify-center items-center mb-8'>
            <div className='mx-4 flex flex-col items-center'>
                <Button color='green' 
                size='sm' 
                variant="outlined"
                onClick={() => setMinFloors((prevValue) => prevValue + 1)} 
                className='my-2'>{React.createElement(PlusIcon, { className: "h-[16px] w-[16px] text-green-800" })}</Button>
                <Input className=''
                color='green'
                label='Минимальное количество этажей:'
                value={minFloors}
                onChange={(e) => setMinFloors(Number(e.target.value))}
                />
                <Button color='green' 
                size='sm' 
                variant="outlined"
                onClick={() => setMinFloors((prevValue) => prevValue - 1)}
                className='my-2'>{React.createElement(MinusIcon, { className: "h-[16px] w-[16px] text-green-800" })}</Button>
            </div>
            <div className='mx-4 flex flex-col items-center'>
                <Button color='green' 
                size='sm' 
                variant="outlined"
                onClick={() => setMinBedrooms((prevValue) => prevValue + 1)} 
                className='my-2'>{React.createElement(PlusIcon, { className: "h-[16px] w-[16px] text-green-800" })}</Button>
                <Input
                color='green'
                label='Minimum Bedrooms:'
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(Number(e.target.value))}
                />
                <Button color='green' 
                size='sm' 
                variant="outlined"
                onClick={() => setMinBedrooms((prevValue) => prevValue - 1)}
                className='my-2'>{React.createElement(MinusIcon, { className: "h-[16px] w-[16px] text-green-800" })}</Button>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='m-4'>
                        <Input
                        color='green'
                        label='Minimum Area:'
                        value={minArea}
                        readOnly
                        />
                    </div>
                    <div className='m-4'>
                            <Input
                            color='green'
                            label='Maximum Area:'
                            value={maxArea}
                            readOnly
                            onChange={(e) => setMaxArea(Number(e.target.value))}
                            />
                    </div>
                </div>
                <Slider
                step={10} max={200} 
                color="green" 
                defaultValue={0} 
                className="text-[#2ec947] min-w-[100px] w-2/3"
                barClassName="rounded-none bg-[#2ec946]"
                thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
                onChange={(e) => setMinArea(Number(e.target.value))}/>
            </div>
        </div>
      <ProjectsComponent Houses = {filteredHouses}/>
  </div>
);
};

export default ProjectsPage;