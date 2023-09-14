import '../../App.css';
import React from "react";
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

import { LightBulbIcon,
         CpuChipIcon,
         CheckBadgeIcon          
} from "@heroicons/react/24/outline";

const WhyUsComponent = () => {
    const tabs = [
        {
            "id": "1",
            "icon": LightBulbIcon,
            "title": "Неординарные решения",
            "description": "Мы не следуем стандартам, мы их устанавливаем, создавая дома, которые выделяются своим дизайном и функциональностью.",
        },
        {
            "id": "2",
            "icon": CpuChipIcon,
            "title": "Новейшие технологии",
            "description": "Применяя передовые методы и технологии, мы обеспечиваем эффективность, долговечность и высокое качество каждого проекта.",
        },
        {
            "id": "3",
            "icon": CheckBadgeIcon,
            "title": "Профессионализм",
            "description": "Благодаря глубоким знаниям и многолетнему опыту, наша команда предоставляет услуги высочайшего уровня.",
        }
    ]


  return (
    <div className='mx-auto flex flex-col justify-center items-center my-10 max-w-screen-2xl'>
      <div className='flex flex-col justify-center items-center mx-2'>
        <h2 className='my-2 text-4xl text font-extralight inline-block text-center'>Почему мы — ваш лучший выбор</h2>
        <div className='underline-2-3 mb-4'></div>
        <p className='text-center max-w-2xl'>
        В "КАСКАД Строительная Компания" мы обеспечиваем превосходство на каждом этапе проекта, делая акцент на вашем удовлетворении и превосходстве результата.
        </p>
      </div>
      <div className='flex flex-wrap justify-center content-center my-4'>
        {
            tabs.map((tabs) => (
                <Card key={tabs.id} className="mt-6 w-96 hover:scale-110 transition-all duration-300 rounded-lg mx-4">
                    <CardBody>
                        {React.createElement(tabs.icon, { className: "h-[32px] w-[32px] text-green-800 mb-2" })}
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {tabs.title}
                        </Typography>
                        <Typography>
                            {tabs.description}
                        </Typography>
                    </CardBody>
                </Card>
            ))
        }
      </div>
    </div>
  );
};

export default WhyUsComponent;