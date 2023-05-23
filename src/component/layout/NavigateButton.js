import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavigateButton() {
  // ({ size, title, navigation }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/pets', { replace: true });
  };
  return (
    <>
      <div className="mb-2">
        <Button onClick={clickHandler} variant="primary" size="lg">
          FIND YOUR FRIENDS
        </Button>{' '}
        {/* <button onClick={clickHandler}>FIND YOUR PET</button> */}
      </div>
    </>
  );
}
export default NavigateButton;
