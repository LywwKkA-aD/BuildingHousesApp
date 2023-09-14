import React from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import {
    PhoneIcon,
    EnvelopeIcon,
    HomeModernIcon
  } from "@heroicons/react/24/outline";

const ContactsComponent = () => {
    return (
        <div className="mx-auto flex flex-col justify-center content-center max-w-screen-2xl">
            <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-lg mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-raw m-2">
                        <div className="my-auto mx-6">
                            {React.createElement(PhoneIcon, { className: "h-[32px] w-[32px] text-green-800" })}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-extralight">Телефон:</p>
                            <p className="font-bold">+8 (777) 777-77-77</p>
                        </div>
                    </div>
                    <div className="flex flex-raw m-2">
                        <div className="my-auto mx-6">
                            {React.createElement(EnvelopeIcon, { className: "h-[32px] w-[32px] text-green-800" })}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-extralight">Почта:</p>
                            <p className="font-bold">test@mail.ru</p>
                        </div>
                    </div>
                    <div className="flex flex-raw m-2">
                        <div className="my-auto mx-6">
                            {React.createElement(HomeModernIcon, { className: "h-[32px] w-[32px] text-green-800" })}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-extralight">Адресс:</p>
                            <p className="font-bold">Ул. Атцйшрвйцш, д.</p>
                            <p className="font-bold">80, Тула</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/5">
                    <div className='flex flex-col justify-center items-left mx-12'>
                        <h2 className='my-2 text-4xl text font-extralight inline-block text-center'>Напишите нам</h2>
                        <div className='underline-2-3 mb-4 mx-auto'></div>
                        <p className='text-center'>
                        Подскажем, ответим на любые вопросы
                        </p>
                    </div>
                    <div className='h-96'>
                        <div className='flex flex-wrap justify-between items-center mt-8 mx-8'>
                            <div className="flex-grow mx-2 mb-4">
                                <Input type='text' color='green' label="Имя и Фамилия" />
                            </div>
                            <div className="flex-grow mx-2 mb-4">
                                <Input type='tel' color='green' label="Телефон" />
                            </div>
                        </div>
                        <div>
                        <div className="w-auto mx-2 px-8 mb-4">
                            <Input type="email" color='green' label="Почта" />
                        </div>
                        <div className="w-auto mx-2 px-8 mb-4">
                            <Textarea color='green' label="Сообщение" />
                        </div>
                        <div className='w-auto mx-2 px-8 mb-4'>
                            <Button fullWidth color='green'>Послать</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsComponent