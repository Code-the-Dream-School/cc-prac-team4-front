import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({
  // navigation: { navigate },
  linkName,
  children,
  variant,
  size,
}) => {
  // ({ size, title, navigation }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(linkName, { replace: true });
    // navigate(linkName);
  };
  return (
    <>
      <div className="mb-2">
        {/* <Button onClick={() => navigate({ route })} variant="primary" size="lg"> */}
        <Button
          onClick={clickHandler}
          // variant="primary"
          style={(variant, size)}
        >
          {/* <button onClick={() => navigate({ route })}> */}
          {children}
        </Button>{' '}
        {/* FIND YOUR FRIENDS
        </Button>{' '} */}
        {/* <button onClick={clickHandler}>FIND YOUR PET</button> */}
      </div>
    </>
  );
};
export default NavigateButton;

// const Home = () => {
// const navigate = useNavigate();

// return (
// 	<>
// 		<h1 style={{color:"green"}}>GeeksForGeeks</h1>
// 		<button onClick={()=>navigate("/about")}>About</button>
// 	</>
// )
// };

// export default Home;
