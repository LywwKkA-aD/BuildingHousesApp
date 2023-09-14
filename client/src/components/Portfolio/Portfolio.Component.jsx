import '../../App.css';
import PortfolioCardComponent from './PortfolioCard/PortfolioCard.Component';

const PortfolioComponent = ({ Houses }) => {

  return (
    <div className='flex flex-wrap min-h-[24rem] justify-center my-4'>
      {Houses.map((house) => (
        <PortfolioCardComponent key={house.house_id} house={house} />
      ))}
    </div>
  );
};

export default PortfolioComponent;
