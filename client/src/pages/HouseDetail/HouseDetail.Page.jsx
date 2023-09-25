import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography } from "@material-tailwind/react";
import CarouselWithContentComponent from '../../components/CarouselWithContent/CarouselWithContent.Component';
import useFirebaseImages from '../../components/useFirebaseImages/useFirebaseImagesHook';


const HouseDetailPage = () => {
  const [houses, setHouses] = useState([]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    Promise.all([fetch('/api/houses'), fetch('/api/plans')])
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

  // Access the house ID from the URL params using useParams
  const { id } = useParams();
  console.log(id);

  // Fetch the house data by ID (you can use your Houses array)
  const house = houses.find((house) => house.house_id === id);
  const imagesData = useFirebaseImages(id || "", 'house_detail');
  const projectImage = useFirebaseImages(id || "", 'project.JPG');

  if (!house) {
    // Handle case where house is not found
    return (
      <div className='h-screen text-center'>
        Loading...
      </div>
    );
  } else {

    const planId = house.plan._path.segments[1];
    const plan = plans.find((plan) => plan.id === planId);
    console.log(imagesData);

    return (
      <div className='flex flex-col justify-center overflow-x-hidden'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='my-2 text-4xl text font-extralight inline-block'>{house.name}</h2>
                <div className='underline-2-3 mb-4'></div>
                <p className='text-center max-w-2xl'>
                      {house.description} <br/>
                </p>
            </div>
            <hr className='my-8 border-t-2'/>
            <div className='flex flex-col justify-center items-center my-8'>
              <div className='flex flex-col justify-center items-center'>
                  <h4 className='my-2 text-2xl text font-extralight inline-block'>Фотографии</h4>
                  <div className='underline-2-3 mb-4 w-8'></div>
              </div>
              <CarouselWithContentComponent imageClassName='max-w-2xl w-full h-full object-cover' carouselClassName={' max-w-xl h-[50vh] w-auto z-0'} content={imagesData}/>
            </div>
            <hr className='my-8 border-t-2'/>
              <div className='flex flex-col justify-center items-center m-8'>
                  <div className='flex flex-col justify-center items-center'>
                      <h4 className='my-2 text-2xl text font-extralight inline-block'>План</h4>
                      <div className='underline-2-3 mb-4 w-8'></div>
                  </div>
                  <div className='flex flex-wrap max-w-6xl justify-center items-top'>
                    <div className='px-2 lg:w-2/3'>
                        {
                          projectImage.map((image) => (
                            <img src={image.src} className='' key={image.id} />
                          ))
                        }
                    </div>
                    <div className='px-2 lg:w-1/3'>
                      <Card className="w-full">
                        <table className="w-full min-w-max table-auto text-left">
                          <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                  <Typography
                                    variant="small"
                                    color="black"
                                    className="font-bold text-base leading-none opacity-100"
                                  >
                                    Комната
                                  </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                  <Typography
                                    variant="small"
                                    color="black"
                                    className="font-bold text-base leading-none opacity-100"
                                  >
                                    Размер
                                  </Typography>
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                          {
                            Object.entries(plan).map(([key, value]) => (
                              key !== "id" && (
                                <tr key={key}>
                                  <td className='p-4 border-b border-blue-gray-50'>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                      {key}
                                    </Typography>
                                  </td>
                                  <td className={`p-4 border-b border-blue-gray-50 bg-blue-gray-50/50 text-right`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                      {value} м²
                                    </Typography>
                                  </td>
                                </tr>
                              ) 
                            ))
                          }
                          </tbody>
                        </table>
                      </Card>
                    </div>
              </div>  
            </div>
      </div>
    );
  }
};   

export default HouseDetailPage;
