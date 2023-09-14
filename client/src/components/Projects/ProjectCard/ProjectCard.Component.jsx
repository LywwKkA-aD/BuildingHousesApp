import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

import { Link } from 'react-router-dom';
import GetFireBaseImageComponent from '../../useFirebaseImages/useFirebaseImagesHook';
import React from 'react';
   
const ProjectCardComponent = ({ house }) => {
    const data = GetFireBaseImageComponent(house.house_id.toString(), 'project.JPG')
    return (
      <Card className="mt-6 max-w-xs mx-4 mb-8">
        <CardHeader color="light-green" className="relative">
          {
            data.map((image) => (
              <img src={image.src} className='hover:scale-125 z-50 transition-all duration-300rounded-lg' key={image.id} />
            ))
          }
        </CardHeader>
        <CardBody className="flex flex-col justify-between">
          <div className="flex flex-raw justify-between">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {house.name}
            </Typography>
            <Link to={`/projects/house/${house.house_id}`}>
              <Button className="bg-green-600 hover:bg-green-500">Посмотреть</Button>
            </Link>
          </div>
          <div className="my-2">
            <Typography>
              {house.bedrooms} спальни | {house.floors} этаж | площадь {house.total_area} м²
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }

export default ProjectCardComponent