import React, { useState } from 'react';
import redCat from '../../images/redCat.mp4';
import './Home.css';
import Loader from '../layout/Loader/Loader';
import PetCard from './PetCard';
// import AdoptButton from "./AdoptButton";
// import FindYourPetButton from "./NavigateButton";
import NavigateButton from '../layout/NavigateButton';
// import '../../App.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className="home_banner">
        <div className="overlay"></div>
        <video src={redCat} autoPlay loop muted />
        <div className="home_banner_content">
          <h1>WELCOME TO ADOPT PET</h1>
          {/* <p>FIND YOUR FRIEND</p> */}
          <div className="find_pet_button">
            <NavigateButton
              linkName={'/pets'}
              children={'FIND YOUR FRIENDS'}
              size="btn-lg"
            />
            {/* // onClick={() => navigate('/pets', { replace: true })} */}
            {/* /> */}
          </div>
          {/* <button>ADOPT NOW</button> */}
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        // <div className="cardsContainerWithSort">
        <div className="cardsContainer" id="container">
          <PetCard />
          {/* <PetCard />
          <PetCard />
          <PetCard /> */}
        </div>
        // </div>
      )}
    </>
  );
};

export default Home;
