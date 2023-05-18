import React, { useState } from "react";
import redCat from "../../images/redCat.mp4";
import "./Home.css";
import Header from "../layout/Header/Header";
import Loader from "../layout/Loader/Loader";
import AdoptButton from "./AdoptButton";
import PetCard from "./PetCard";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className="main">
          <div className="home_banner">
            <div className="overlay"></div>
            <video src={redCat} autoPlay loop muted />
            <div className="home_banner_content">
              <h1>WELCOM TO ADOPT PET</h1>
              <p>FIND YOUR FRIEND</p>
              <AdoptButton />
            </div>
          </div>
          <PetCard />
        </div>
      )}
    </>
  );
};

export default Home;
