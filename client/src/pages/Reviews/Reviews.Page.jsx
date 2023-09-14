import '../../App.css';

const ReviewsPage = () => {
  return (
    <div className='mx-auto h-screen flex flex-col my-10 max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='my-2 text-4xl text font-extralight inline-block'>Отзывы</h2>
            <div className='underline-2-3 mb-4'></div>
            <p className='text-center max-w-2xl'>
              Что наши клиенты говорят о нас
            </p>
        </div>
    </div>

  );
};

export default ReviewsPage;