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

// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import whiteCat from '../../images/whiteCat.jpg';
// import './PetCard.css';
// import { Link } from 'react-router-dom';
// import NavigateButton from '../layout/NavigateButton';

// function PetCard() {
//   const CardInfo = [
//     { image: '', title: '', text: '' },
//     { image: '', title: '', text: '' },
//     { image: '', title: '', text: '' },
//     { image: '', title: '', text: '' },
//   ];
//   return (
//     <>
//       <div className="cardContainer">
//         <Link className="petCard_link" to="/pet/cat`">
//           {/* <Card className="petCard"> */}
//           <Card style={{ width: '18rem' }}>
//             {/* <Card.Img variant="top" src={whiteCat} alt="white cat" /> */}
//             <Card.Img variant="top" src={whiteCat} />

//             <Card.Body>
//               <Card.Title>Musya</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>

//               <NavigateButton />
//             </Card.Body>
//           </Card>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default PetCard;

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
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import whiteCat from '../../images/whiteCat.jpg';
// import './PetCard.css';
// import { Link } from 'react-router-dom';
// import NavigateButton from '../layout/NavigateButton';

// import Card from 'react-bootstrap/Card';
// import whiteCat from '../../images/whiteCat.jpg';
// import './PetCard.css';
// import { Link } from 'react-router-dom';
// import NavigateButton from '../layout/NavigateButton';

function PetCard() {
  return (
    <Row xs={1} md={3} className="row-cols-3 g-col-4">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col className="mb-4" key={idx}>
          <Card
            className="border-0"
            style={{ width: '18rem', background: 'transporent' }}
          >
            {/* <Card.Img variant=“top” src=“holder.js/100px180?text=Image cap” / */}
            {/* <Card.Img variant="top" src={`${whiteCat}/100px180`} /> */}
            <Card.Img
              variant="top"
              // src={`${whiteCat}/100px180`}
              // style={{ width: '100%', height: '18rem' }}
              style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
              src={whiteCat}
              alt="white cat"
            />
            {/* <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            > 
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                Image cap
              </text>
          </svg>*/}
            <Card.Body style={{ background: 'transporent' }}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PetCard;
