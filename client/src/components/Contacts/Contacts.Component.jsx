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
                            <p className="font-bold">+8 (922) 264-08-30</p>
                        </div>
                    </div>
                    <div className="flex flex-raw m-2">
                        <div className="my-auto mx-6">
                            {React.createElement(EnvelopeIcon, { className: "h-[32px] w-[32px] text-green-800" })}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-extralight">Почта:</p>
                            <p className="font-bold">sk_kaskad@mail.ru</p>
                        </div>
                    </div>
                    <div className="flex flex-raw m-2">
                        <div className="my-auto mx-6">
                            {React.createElement(HomeModernIcon, { className: "h-[32px] w-[32px] text-green-800" })}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-extralight">Адресс:</p>
                            <p className="font-bold">Ул. Володарского, д.</p>
                            <p className="font-bold">70, Тюмень</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-3/5">
                    <div className='flex flex-col justify-center items-left mx-12'>
                        <h2 className='my-2 text-4xl text font-extralight inline-block'>Напишите нам</h2>
                        <div className='underline-2-3 mb-4'></div>
                        <p className=''>
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