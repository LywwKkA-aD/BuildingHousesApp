import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography } from "@material-tailwind/react";
import ContactUsComponent from '../../components/ContactUs/ContactUs.component';
import useFirebaseImages from '../../components/useFirebaseImages/useFirebaseImagesHook';

function formatNumberToCurrency(num, currencySymbol = '₽') {
  const formattedNumber = new Intl.NumberFormat('ru-RU').format(num);
  return `${formattedNumber} ${currencySymbol}`;
}

const ProjectDetailPage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, []);

  // Access the house ID from the URL params using useParams
  const { id } = useParams();

  // Fetch the house data by ID (you can use your Houses array)
  const house = houses.find((house) => house.house_id === id);
  const projectImage = useFirebaseImages(id || "", 'project.JPG');

  if (!house) {
    // Handle case where house is not found
    return (
      <div className='h-screen text-center'>
        Loading...
      </div>
    );
  } else {

  return (
    <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='my-2 text-4xl text font-extralight inline-block'>{house.name}</h2>
                <div className='underline-2-3 mb-4'></div>
                <p className='text-center max-w-2xl'>
                      {house.description} <br/>
                </p>
            </div>
            <hr className='my-8 border-t-2 w-full'/>
              <div className='flex flex-col justify-center items-center my-8 w-full'>
                  <div className='flex flex-col justify-center items-center'>
                      <h4 className='my-2 text-2xl text font-extralight inline-block'>Расценка</h4>
                      <div className='underline-2-3 mb-4 w-8'></div>
                  </div>
                  <div className='flex flex-row max-w-sm w-full'>
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
                                    Тип
                                  </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                  <Typography
                                    variant="small"
                                    color="black"
                                    className="font-bold text-base leading-none opacity-100"
                                  >
                                    Цена
                                  </Typography>
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                                <tr>
                                  <td className='p-4 border-b border-blue-gray-50'>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                      Предчистовая
                                    </Typography>
                                  </td>
                                  <td className={`p-4 border-b border-blue-gray-50 bg-blue-gray-50/50 text-right`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                    {formatNumberToCurrency(house.no_full_pricing)}
                                    </Typography>
                                  </td>
                                </tr>
                                <tr>
                                  <td className='p-4 border-b border-blue-gray-50'>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                      Чистовая "под ключ"
                                    </Typography>
                                  </td>
                                  <td className={`p-4 border-b border-blue-gray-50 bg-blue-gray-50/50 text-right`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                      {formatNumberToCurrency(house.full_pricing)}
                                    </Typography>
                                  </td>
                                </tr>
                          </tbody>
                        </table>
                      </Card>
              </div>  
            </div>
            <hr className='my-8 border-t-2 w-full'/>
            <div className='flex flex-col justify-center items-center my-8'>
                  <div className='flex flex-col justify-center items-center'>
                      <h4 className='my-2 text-2xl text font-extralight inline-block'>План</h4>
                      <div className='underline-2-3 mb-4 w-8'></div>
                  </div>
                    <div className='w-2/3'>
                        {
                          projectImage.map((image) => (
                            <img src={image.src} className='' key={image.id} />
                          ))
                        }
                    </div>
            </div>
            <hr className='my-8 border-t-2 w-full'/>
            <ContactUsComponent />
      </div>
    );
  }
};   

export default ProjectDetailPage;
