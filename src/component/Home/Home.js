import React, { useState } from "react";
import redCat from "../../images/redCat.mp4";
import "./Home.css";
import Header from "../layout/Header/Header";
import Loader from "../layout/Loader/Loader";
import PetCard from "./PetCard";
import AdoptButton from "./AdoptButton";
const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      <Header />

      <div className="main">
        <div className="home_banner">
          <div className="overlay"></div>
          <video src={redCat} autoPlay loop muted />
          <div className="home_banner_content">
            <h1>WELCOM TO ADOPT PET</h1>
            <p>FIND YOUR FRIEND</p>

            <AdoptButton />
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
