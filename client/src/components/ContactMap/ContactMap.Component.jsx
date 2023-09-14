import '../../App.css';
import React from 'react';

const ContactMapComponent = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center my-10 max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center my-8'>
            <h2 className='my-2 text-4xl text font-extralight inline-block'>Наши контактные данные</h2>
            <div className='underline-2-3 mb-4'></div>
            <p className='text-center max-w-2xl'>
                Если у вас возникли вопросы или вам нужна дополнительная
                информация, пожалуйста, свяжитесь с нами по следующим контактным данным.
            </p>
        </div>
        <div className='flex w-full h-96'>
            <iframe className='flex-grow' src="https://yandex.com/map-widget/v1/?ll=66.288239%2C56.668442&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMzQyNzI1NjIzEnHQoNC-0YHRgdC40Y8sINCi0Y7QvNC10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0K_Qu9GD0YLQvtGA0L7QstGB0LosINGD0LvQuNGG0LAg0JvQuNC30Ysg0KfQsNC50LrQuNC90L7QuSwgNDjQkCIKDZSThEIVfKxiQg%2C%2C&z=17.09" sandbox="allow-scripts allow-modal allow-same-origin"></iframe>
        </div>
    </div>

  );
};

export default ContactMapComponent;