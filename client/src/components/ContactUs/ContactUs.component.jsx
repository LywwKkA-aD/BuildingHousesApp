import '../../App.css';
import { Input, Textarea, Button } from "@material-tailwind/react";
import React from 'react';


const ContactUsComponent = () => {
  return (
    <div className=' flex flex-col justify-center items-center my-10 w-full max-w-screen-2xl'>
    <div className='w-full bg-black'>
      <img
      src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      alt="image 3"
      className="h-[50vh] w-full object-cover opacity-50"
      />
    </div>
      <div className='flex flex-col justify-center items-center -mt-96 z-50'>
        <h2 className='my-2 text-4xl text font-extralight inline-block text-white'>Напишите нам</h2>
        <div className='underline-2-3 mb-4'></div>
        <p className='text-center text-white'>
          Подскажем, ответим на любые вопросы
        </p>
      </div>
      <div className='max-w-4xl h-96 bg-white z-50 shadow-lg'>
        <div className='flex flex-wrap justify-center items-center mt-8 mx-8'>
          <div className="w-full md:w-auto mx-4 mb-4">
            <Input type='text' color='green' label="Имя и Фамилия" />
          </div>
          <div className="w-full md:w-auto mx-4 mb-4">
            <Input type='tel' color='green' label="Телефон" />
          </div>
        </div>
        <div>
          <div className="w-auto mx-4 px-8 mb-4">
            <Input type="email" color='green' label="Почта" />
          </div>
          <div className="w-auto mx-4 px-8 mb-4">
            <Textarea color='green' label="Message" />
          </div>
          <div className='w-auto mx-4 px-8 mb-4'>
            <Button fullWidth color='green'>Послать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;