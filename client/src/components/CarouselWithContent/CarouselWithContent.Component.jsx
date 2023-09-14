import { Carousel, IconButton } from "@material-tailwind/react";

const CarouselWithContentComponent = ({ imageClassName, content, carouselClassName }) => {
  return (
    <Carousel autoplay={false} loop={true} transition={{ duration: 1 }} className={carouselClassName}
      prevArrow={({ handlePrev }) => (
        <div className="bg-white opacity-90 !absolute top-2/4 left-4 -translate-y-2/4 rounded-lg">
        <IconButton
          variant="text"
          color="green"
          size="lg"
          onClick={handlePrev}
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <div className="bg-white opacity-90 !absolute top-2/4 right-4 -translate-y-2/4 rounded-lg">
        <IconButton
          variant="text"
          color="green"
          size="lg"
          onClick={handleNext}
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
        </div>
      )}
    >
      {content.map((image, index) => (
        <img key={index} src={image.src} className={imageClassName} />
      ))}
    </Carousel>
  );
};

export default CarouselWithContentComponent;