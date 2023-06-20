import React, { useState, useReducer, useEffect, useMemo } from 'react';
// import redCat from '../../images/redCat.mp4';
import Loader from '../layout/Loader/Loader';
import PetCard from '../Home/PetCard';
// import NavigateButton from '../layout/NavigateButton/NavigateButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './Pets.module.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {
  initialState,
  petsReducer,
  catBreedsReducer,
  dogBreedsReducer,
  catColorsReducer,
  dogColorsReducer,
} from '../../reducers/petReducer';
import {
  getPet,
  getCatBreeds,
  getDogBreeds,
  getCatColors,
  getDogColors,
} from '../../actions/petAction';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';

const Pets = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [state, dispatch] = useReducer(petsReducer, initialState);
  const [stateCatBreed, dispatchCatBreed] = useReducer(
    catBreedsReducer,
    initialState
  );
  const [stateDogBreed, dispatchDogBreed] = useReducer(
    dogBreedsReducer,
    initialState
  );

  const [stateCatColor, dispatchCatColor] = useReducer(
    catColorsReducer,
    initialState
  );
  const [stateDogColor, dispatchDogColor] = useReducer(
    dogColorsReducer,
    initialState
  );
  const [selectedType, setSelectedType] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedGoodWith, setSelectedGoodWith] = useState('');
  const [selectedCoatLength, setSelectedCoatLength] = useState('');
  const [selectedCareAndBehav, setSelectedCareAndBehav] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  // useEffect for getPet
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getPet(dispatch);
      } catch (error) {
        setErrorMessage('');
        setErrorMessage('Error loading pets');
      }
    };
    fetchData();
  }, []);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pets = useMemo(() => Object.values(state.pets || {}), [state.pets]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPets = pets.slice(indexOfFirstItem, indexOfLastItem);
  // useEffect for Breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      if (selectedType === 'Cat') {
        try {
          await getCatBreeds(dispatchCatBreed);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading cat breeds');
        }
      }
      if (selectedType === 'Dog') {
        try {
          await getDogBreeds(dispatchDogBreed);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading dog breeds');
        }
      }
    };
    fetchBreeds();
  }, [selectedType]);
  // useEffect for Colors
  useEffect(() => {
    const fetchColors = async () => {
      if (selectedType === 'Cat') {
        try {
          await getCatColors(dispatchCatColor);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading cat Colors');
        }
      }
      if (selectedType === 'Dog') {
        try {
          await getDogColors(dispatchDogColor);
        } catch (error) {
          setErrorMessage('');
          setErrorMessage('Error loading dog Colors');
        }
      }
    };
    fetchColors();
  }, [selectedType]);

  // Options

  const optionsBreed = {};
  if (selectedType === 'Cat') {
    const catBreeds = stateCatBreed.catBreeds || [];
    catBreeds.forEach((breed) => {
      optionsBreed[breed] = breed;
    });
  }
  if (selectedType === 'Dog') {
    const dogBreeds = stateDogBreed.dogBreeds || [];
    dogBreeds.forEach((breed) => {
      optionsBreed[breed] = breed;
    });
  }

  const optionsColor = {};
  if (selectedType === 'Cat') {
    const catColors = stateCatColor.catColors || [];
    catColors.forEach((color) => {
      optionsColor[color] = color;
    });
  }
  if (selectedType === 'Dog') {
    const dogColors = stateDogColor.dogColors || [];
    dogColors.forEach((color) => {
      optionsColor[color] = color;
    });
  }

  const optionsType = {
    Cat: 'Cat',
    Dog: 'Dog',
  };
  const optionsAge = {
    Baby: selectedType === 'Cat' ? 'Kitten' : 'Puppy',
    Young: 'Young',
    Adult: 'Adult',
    Senior: 'Senior',
  };
  const optionsSize = {
    Small: 'Small (0-6 lbs)',
    Medium: 'Medium (7-11 lbs)',
    Large: 'Large (12-16 lbs)',
    ExtraLarge: 'Extra Large (17 lbs or more)',
  };
  const optionsGender = {
    Male: 'Male',
    Female: 'Female',
  };
  const optionsGoodWith = {
    children: 'Kids',
    dogs: 'Dogs',
    cats: 'Other cats',
  };
  const optionsCoatLength = {
    Short: 'Short',
    Medium: 'Medium',
    Long: 'Long',
    Curly: 'Curly',
  };
  const optionsCareAndBehav = {
    house_trained: 'House-trained',
    declawed: 'Declawed',
    special_needs: 'Special Needs',
  };
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  // Type
  const handleSelectTypeChange = (event) => {
    const selectedPetType = event.target.value;
    setSelectedType(selectedPetType);
  };
  // Breed
  const handleSelectBreedChange = async (event) => {
    const selectedPetBreed = event.target.value;
    setSelectedBreed(selectedPetBreed);
    const breed = selectedPetBreed;
    alert(breed); // temporary alert for testing
  };
  // Color
  const handleSelectColorChange = async (event) => {
    const selectedPetColor = event.target.value;
    setSelectedColor(selectedPetColor);
    const color = selectedPetColor;
    alert(color); // temporary alert for testing
  };
  // Age
  const handleSelectAgeChange = async (event) => {
    const selectedPetAge = event.target.value;
    setSelectedAge(selectedPetAge);
    const age = selectedPetAge;
    alert(age); // temporary alert for testing
  };
  // Size
  const handleSelectSizeChange = async (event) => {
    const selectedPetSize = event.target.value;
    setSelectedSize(selectedPetSize);
    const size = selectedPetSize;
    alert(size); // temporary alert for testing
  };
  // Gender
  const handleSelectGenderChange = async (event) => {
    const selectedPetGender = event.target.value;
    setSelectedGender(selectedPetGender);
    const gender = selectedPetGender;
    alert(gender); // temporary alert for testing
  };
  // Good With
  const handleSelectGoodWithChange = async (event) => {
    const selectedPetGoodWith = event.target.value;
    setSelectedGoodWith(selectedPetGoodWith);
    const goodWith = selectedPetGoodWith;
    alert(goodWith); // temporary alert for testing
  };
  // Coat Length
  const handleSelectCoatLengthChange = async (event) => {
    const selectedPetCoatLength = event.target.value;
    setSelectedCoatLength(selectedPetCoatLength);
    const coatLength = selectedPetCoatLength;
    alert(coatLength); // temporary alert for testing
  };
  // Care & Behavior
  const handleSelectCareAndBehavChange = async (event) => {
    const selectedPetCareAndBehav = event.target.value;
    setSelectedCareAndBehav(selectedPetCareAndBehav);
    const careAndBehav = selectedPetCareAndBehav;
    alert(careAndBehav); // temporary alert for testing
  };

  return (
    <>
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}
      <div className={style.pets_container}>
        <span className={style.homePage_txt}>
          <h3>CHOOSE YOUR PET</h3>
        </span>
        {state.loading ? (
          <Loader className="small-spinner" />
        ) : (
          <div className={style.cardsContainerWithSelect}>
            <div className={style.selectBox}>
              <Nav style={{ width: '12rem' }} className="flex-column p-3">
                {/* -----Type----- */}
                <Form.Select
                  id="PetType"
                  name="PetType"
                  className="border-1 bg-transparent rounded mb-3"
                  disabled={!Array.isArray(pets) || pets.length === 0}
                  onChange={handleSelectTypeChange}
                  value={selectedType}
                >
                  <option disabled value="">
                    Type
                  </option>
                  {Object.entries(optionsType).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Breed----- */}
                <Form.Select
                  id="PetBreed"
                  name="PetBreed"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectBreedChange}
                  value={selectedBreed}
                >
                  <option disabled value="">
                    Breed
                  </option>
                  {Object.entries(optionsBreed).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Age----- */}
                <Form.Select
                  id="PetAge"
                  name="PetAge"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectAgeChange}
                  value={selectedAge}
                >
                  <option disabled value="">
                    Age
                  </option>
                  {Object.entries(optionsAge).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Size----- */}
                <Form.Select
                  id="PetSize"
                  name="PetSize"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectSizeChange}
                  value={selectedSize}
                >
                  <option disabled value="">
                    Size
                  </option>
                  {Object.entries(optionsSize).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Gender----- */}
                <Form.Select
                  id="PetGender"
                  name="PetGender"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectGenderChange}
                  value={selectedGender}
                >
                  <option disabled value="">
                    Gender
                  </option>
                  {Object.entries(optionsGender).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Good with----- */}
                <Form.Select
                  id="PetGoodWith"
                  name="PetGoodWith"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectGoodWithChange}
                  value={selectedGoodWith}
                >
                  <option disabled value="">
                    Good with
                  </option>
                  {Object.entries(optionsGoodWith).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Coat length----- */}
                <Form.Select
                  id="PetCoatLength"
                  name="PetCoatLength"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectCoatLengthChange}
                  value={selectedCoatLength}
                >
                  <option disabled value="">
                    Coat length
                  </option>
                  {Object.entries(optionsCoatLength).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Color----- */}
                <Form.Select
                  id="PetColor"
                  name="PetColor"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectColorChange}
                  value={selectedColor}
                >
                  <option disabled value="">
                    Color
                  </option>
                  {Object.entries(optionsColor).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
                {/* -----Care & behavior----- */}
                <Form.Select
                  id="PetCareAndBehav"
                  name="PetCareAndBehav"
                  className={`${style['select-option']} border-1 bg-transparent rounded mb-3`}
                  disabled={
                    !Array.isArray(pets) ||
                    pets.length === 0 ||
                    selectedType === ''
                  }
                  onChange={handleSelectCareAndBehavChange}
                  value={selectedCareAndBehav}
                >
                  <option disabled value="">
                    Care & behavior
                  </option>
                  {Object.entries(optionsCareAndBehav).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
              </Nav>
            </div>
            {/* Pet Card container */}
            <div className={style.cardsContainer} fluid="md" id="container">
              <Row xs={1} md={2} lg={2} xl={3} className="ps-0 pe-0">
                {Object.values(currentPets).map((pet, idx) => (
                  <Col className="mb-4 ps-0 pe-0" key={idx}>
                    <div className={style.grid_item}>
                      <PetCard pet={pet} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination className="pagination-centered">
          {Array.from({
            length: Math.ceil(pets.length / itemsPerPage),
          }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={style['custom-pagination-link']}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Pets;
