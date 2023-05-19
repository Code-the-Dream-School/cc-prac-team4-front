import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import "./App.css";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <main>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            explicabo!
          </p>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          reiciendis architecto vitae neque placeat maxime repudiandae inventore
          voluptates, sit nihil?
        </p>
        SOme stuff
      </main>
    </>
  );
}

export default App;
