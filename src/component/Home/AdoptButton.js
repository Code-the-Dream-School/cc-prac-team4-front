// import React from "react";
// import Button from "react-bootstrap/Button";

// function AdoptButton() {
//   return (
//     <>
//       <div className="mb-2">
//         <Button variant="primary" size="lg">
//           ADIPT NOW
//         </Button>{" "}
//         <Button variant="secondary" size="lg">
//           Large button
//         </Button>
//       </div>
//     </>
//   );
// }

// export default AdoptButton;

// import Button from "react-bootstrap/Button";

// function AdoptButton() {
//   const [adopt, setAdopt] = React.useState();

//   const handleClick = () => {
//     console.log("Button click ...");
//   };
//   return (
//     <>
//       <Button
//         type="button"
//         onClick={handleClick}
//         variant="primary"
//         size="lg"
//         active
//       >
//         ADOPT NOW
//       </Button>{" "}
// {
/* <Button variant="secondary" size="lg" active>
        Button
      </Button> */
// }
//     </>
//   );
// }

// export default AdoptButton;

import React from "react";
import { useNavigate } from "react-router-dom";

function AdoptButton() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/application/confirm", { replace: true });
  };
  return (
    <>
      <button onClick={clickHandler}>ADOPT NOW</button>
    </>
  );
}
export default AdoptButton;
