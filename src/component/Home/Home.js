import React, { useState } from 'react';
import redCat from '../../images/redCat.mp4';
import './Home.css';
import Loader from '../layout/Loader/Loader';
import PetCard from './PetCard';
// import AdoptButton from "./AdoptButton";
// import FindYourPetButton from "./NavigateButton";
import NavigateButton from '../layout/NavigateButton';
const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      <div className="main">
        <div className="home_banner">
          <div className="overlay"></div>
          <video src={redCat} autoPlay loop muted />
          <div className="home_banner_content">
            <h1>WELCOM TO ADOPT PET</h1>
            {/* <p>FIND YOUR FRIEND</p> */}
            <div className="find_pet_button">
              <NavigateButton />
            </div>
            {/* <button>ADOPT NOW</button> */}
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="cardsContainerWithSort">
            <div className="cardsContainer" id="container">
              <PetCard />
              <PetCard />
              <PetCard />
              <PetCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
