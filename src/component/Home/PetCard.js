import React from "react";
import { Link } from "react-router-dom";
import AdoptButton from "./AdoptButton";
import whiteCat from "../../images/whiteCat.jpg";
import "./PetCard.css";
// import { Rating } from "@material-ui/lab";

const PetCard = () => {
  //   const options = {
  //     // value: product.ratings,
  //     readOnly: true,
  //     precision: 0.5,
  //   };
  return (
    // <Link className="petCard" to={`/pet/${pet._id}`}>
    <div className="petCard">
      <Link to="/pet/cat`">
        {/* <img src={pet.images[0].url} alt={pet.name} /> */}
        <img src={whiteCat} alt="cat" />

        {/* <p>{pet.name}</p> */}
        <p>Cat</p>
        <div>
          {/* <Rating {...options} />{" "} */}
          <span className="petCardSpan">
            {" "}
            {/* ({pet.numOfReviews} Reviews) */}
          </span>
        </div>
        {/* <span>{`₹${product.price}`}</span> */}
        <span>
          <AdoptButton />
        </span>
      </Link>
    </div>
  );
};

export default PetCard;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
