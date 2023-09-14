import '../../App.css';
import ProjectCardComponent from './ProjectCard/ProjectCard.Component';
import React from 'react';

const ProjectComponent = ({ Houses }) => {
  return (
      <div className='flex flex-wrap min-h-[24rem] justify-center my-4'>
            {Houses.map((house) => (
                <ProjectCardComponent key={house.house_id} house={house} />
            ))}
      </div>
  );
};

export default ProjectComponent;