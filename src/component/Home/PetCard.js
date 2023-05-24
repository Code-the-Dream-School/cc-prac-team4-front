// import React from "react";
// import { Link } from "react-router-dom";
// import whiteCat from "../../images/whiteCat.jpg";
// import "./PetCard.css";
// import Button from 'react-bootstrap/Button';

// const PetCard = () => {
//
//   return (
// <Link className="petCard" to={`/pet/${pet._id}`}>
// <div className="petCard">
//   <Link to="/pet/cat`">

/* <img src={pet.images[0].url} alt={pet.name} /> */

// <img src={whiteCat} alt="cat" />

/* <p>{pet.name}</p> */

// /<p>Cat</p>
// <div>

/* <Rating {...options} />{" "} */

//   <span className="petCardSpan">
// {" "}

/* ({pet.numOfReviews} Reviews) */

//   </span>
// </div>

/* <span>{`₹${product.price}`}</span> */

//         <span>
//           <button>ADOPT</button>
//         </span>
//       </Link>
//     </div>
//   );
// };

// export default PetCard;

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

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div> */

import React from 'react';
import Card from 'react-bootstrap/Card';
import whiteCat from '../../images/whiteCat.jpg';
import './PetCard.css';
import { Link } from 'react-router-dom';
import NavigateButton from '../layout/NavigateButton';

function PetCard() {
  const CardInfo = [
    { image: '', title: '', text: '' },
    { image: '', title: '', text: '' },
    { image: '', title: '', text: '' },
    { image: '', title: '', text: '' },
  ];
  return (
    <>
      <div className="cardContainer">
        <Link className="petCard_link" to="/pet/cat`">
          <Card className="card">
            <Card.Img variant="top" src={whiteCat} alt="white cat" />
            <Card.Body>
              <Card.Title>Musya</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <NavigateButton />
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default PetCard;

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;
