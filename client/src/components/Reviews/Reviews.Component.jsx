import '../../App.css';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  function HeartIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-red-500"
      >
        <path
          fillRule="evenodd"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          clipRule="evenodd"
        />
      </svg>
    );
  }  


const ReviewsComponent = () => {
    const reviewData = [
      {
        "id": "1",
        "name": "Дэймон Сальват",
        "job": "Предприниматель",
        "comment": "Компания осуществила мою мечту о строительстве индивидуального дома. Внимание к деталям и персонализированный подход на протяжении всего процесса были достойны похвалы.",
        "avatar": "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      },
      {
        "id": "2",
        "name": "Елена Гильберт",
        "job": "Дизайнер моды",
        "comment": "Сначала я беспокоилась о строительстве моего первого дома. Команда была поддерживающей, поняла моё видение и превратила его в реальность. Это был замечательный опыт!",
        "avatar": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
      },
      {
        "id": "3",
        "name": "Стефан Сальва",
        "job": "Архитектор",
        "comment": "Как архитектор, я выставляю высокие требования к строительству дома. Мастерство и преданность, которые показала эта компания, превзошли мои ожидания.",
        "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
      },
      {
        "id": "4",
        "name": "Бонни Бен",
        "job": "Терапевт",
        "comment": "Строительство дома с этой компанией было как сотрудничество идей. Они удостоверились, что мои потребности были удовлетворены, и результат был нечто большее, чем великолепный.",
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      },
      {
        "id": "5",
        "name": "Клауса Мика",
        "job": "Художник",
        "comment": "Каждый уголок моего дома рассказывает историю. Компания уловила суть того, что я хотела, и построила дом, который действительно чувствует себя моим.",
        "avatar": "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      },
      {
        "id": "6",
        "name": "Ребекка Мик",
        "job": "Блогер моды",
        "comment": "От начала и до конца процесс строительства дома был бесшовным. Обязательство компании к качеству и эстетике не имеет себе равных. Я влюблена в свой новый дом!",
        "avatar": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      }

    ]
  return (
    <div className='mx-auto flex flex-col justify-center items-center my-10 max-w-screen-2xl'>
      <div className='flex flex-col justify-center items-center mb-4'>
        <h2 className='my-2 text-4xl text font-extralight inline-block'>Отзывы</h2>
        <div className='underline-2-3 mb-4'></div>
        <p className='text-center'>
            Отзывы наших клиентов
        </p>
      </div>
      <div className='flex flex-wrap justify-center content-center'>
            {reviewData.map((reviewData) => (
                <Card key={reviewData.id} color="transparent" shadow={false} className="w-full max-w-[20rem] mx-12">
                    <CardHeader
                    color="transparent"
                    floated={false}
                    shadow={false}
                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                    <Avatar
                        size="lg"
                        variant="circular"
                        src={reviewData.avatar}
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            { reviewData.name }
                        </Typography>
                        <div className="5 flex items-center gap-0">
                            <HeartIcon />
                            <HeartIcon />
                            <HeartIcon />
                            <HeartIcon />
                            <HeartIcon />
                        </div>
                        </div>
                        <Typography color="blue-gray">{ reviewData.job }</Typography>
                    </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                    <Typography>
                        &quot;{ reviewData.comment }&quot;
                    </Typography>
                    </CardBody>
                </Card>
            ))
            }
      </div>
    </div>
  );
};

export default ReviewsComponent;