import React, { useState, useEffect } from 'react';
import PortfolioComponent from '../../components/Portfolio/Portfolio.Component';
import ProjectComponent from '../../components/Projects/Project.Component';
import WhyUsComponent from '../../components/WhyUs/WhyUs.Component';
import ReviewsComponent from '../../components/Reviews/Reviews.Component';
import ContactUsComponent from '../../components/ContactUs/ContactUs.component';
import CarouselWithContentComponent from '../../components/CarouselWithContent/CarouselWithContent.Component';
import useFirebaseImages from '../../components/useFirebaseImages/useFirebaseImagesHook';

const HomePage = () => {
  const data = useFirebaseImages('home', 'home')
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/houses')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error('Error fetching houses:', error);
      });
  }, []); // Run once when component mounts

  return (
    <div>   
            <CarouselWithContentComponent imageClassName='w-full h-full object-cover' carouselClassName='h-[calc(100vh-5rem)] w-auto z-0' content={data}/>
            <WhyUsComponent />
            <div className='mx-auto flex flex-col justify-center items-center my-8 max-w-screen-2xl'>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <h2 className='my-2 text-4xl text font-extralight inline-block'>Портфолио</h2>
                    <div className='underline-2-3 mb-4'></div>
                    <p className='text-center max-w-2xl'>
                    Наши дома — это гармония функциональности, комфорта и роскоши, созданная
                    для вашего удобства и уюта.
                    </p>
                </div>
                <PortfolioComponent Houses={houses} />
            </div>
            <div className='mx-auto flex flex-col justify-center items-center my-8 max-w-screen-2xl'>
                <div className='flex flex-col justify-center items-center mb-4'>
                    <h2 className='my-2 text-4xl text font-extralight inline-block'>Проекты домов и коттеджей</h2>
                    <div className='underline-2-3 mb-4'></div>
                    <p className='text-center max-w-2xl'>
                    Для нас каждый дом — это отражение индивидуальности его владельца. Мы прилагаем
                    все усилия, чтобы создать пространство, где каждая деталь будет говорить о вашем
                    характере, вкусах и стиле жизни.
                    </p>
                </div>
                <ProjectComponent Houses={houses} />
            </div>
            <ReviewsComponent />
            <ContactUsComponent />
        </div>
    )
}

export default HomePage;