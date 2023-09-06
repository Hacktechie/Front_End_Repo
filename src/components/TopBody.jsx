
import { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Arrow from '../assets/Rakesh/arrow.png';
import Form from 'react-bootstrap/Form';
import '../stylesheets/topbody.css'


const TopBody = () => {


    // const [selectedOption, setSelectedOption] = useState(null);
    // const handleOptionChange = (event) => { setSelectedOption(event.target.value); }


    const [isRadioVisible, setIsRadioVisible] = useState(true);
    const [rotationAngle, setRotationAngle] = useState(180);

    const toggleRadioVisibility = () => {
        setIsRadioVisible(!isRadioVisible);

        setRotationAngle(rotationAngle + 180);
    };

    const [isRadioVisibl, setIsRadioVisibl] = useState(true);
    const [rotationAngl, setRotationAngl] = useState(180);


    const toggleRadioVisibilit = () => {
        setIsRadioVisibl(!isRadioVisibl);

        setRotationAngl(rotationAngl + 180);

    };


    const filter_card = {

        borderRadius: '20px',
        position: 'sticky',
        border: 'none',

    }


    // const [meal, setMeal] = useState([]);

    // useEffect(() => {
    //     fetch('www.themealdb.com/api/json/v1/1/categories.php')
    //         .then(Response => Response.json())
    //         .then(menu => setMeal(menu.meal))
    //         .catch(error => console.error('Error fetching data:', error))
    // }, []);


    const [categori, setCategori] = useState([]);

    useEffect(() => {
        // Fetch data from the meal categories API
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setCategori(data.categories))
            .catch(error => console.error('Error fetching data:', error));


    }, []);





    return (
        <>
            {/* <div>
      <h1>Meal Categories</h1>
      <ul>
        {meal.map(category => (
          <li key={category.idCategory}>{category.strCategory}</li>
        ))}
      </ul>
    </div> */}

            <div className='d-flex justify-content-center samp-container'>
                <div className='runningmovies-container'>
                    <Card className='movies_filter_card'
                        style={filter_card}>
                        <div className='movies_filter-container'>

                            <div className="laguage_filter">

                                <div className='dropdown-container ' onClick={toggleRadioVisibility}>
                                    <span>Languages</span>
                                    <div className='arrow'>
                                        <img width={'24px'} src={Arrow} alt="" style={{ transform: `rotate(${rotationAngle}deg)` }} />
                                    </div>
                                </div>
                                {isRadioVisible && (
                                    <div className="filter_radio" id='radios'>
                                        <Card style={{ border: 'none' }}>
                                            <Card.Body>

                                                <Form>
                                                    {['radio'].map((type) => (
                                                        <div key={`default-${type}`} className="mb-3">

                                                            <Form.Check
                                                                label="All "
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-1`}

                                                            />
                                                            <Form.Check

                                                                label="Tamil"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-2`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="English"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-3`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="Malayalam"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-4`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="Telugu"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-5`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="Kannada"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-6`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="Hindi"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-7`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="Korean"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-8`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>

                                            </Card.Body>

                                        </Card>
                                    </div>
                                )}
                            </div>
                            <div className="format_filter">
                                <div className='dropdown-container-2 ' onClick={toggleRadioVisibilit}>
                                    <span>Format</span>
                                    <div className='arrow'>
                                        <img width={'24px'} src={Arrow} alt="" style={{ transform: `rotate(${rotationAngl}deg)` }} />
                                    </div>
                                </div>
                                {isRadioVisibl && (
                                    <div className="filter_radio" id='radios'>
                                        <Card style={{ width: '15rem', border: 'none' }}>
                                            <Card.Body>

                                                <Form>
                                                    {['radio'].map((type) => (
                                                        <div key={`default-${type}`} className="mb-3">
                                                            <Form.Check

                                                                label="All"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-1`}
                                                            />
                                                            <Form.Check

                                                                label="IMAX"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-2`}
                                                            />
                                                            <Form.Check
                                                                gap={2}
                                                                label="2D"
                                                                name="group1"
                                                                type={type}
                                                                id={`default-${type}-3`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>

                                            </Card.Body>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className='clear_filter'>Clear all filters</span>
                    </Card>



                    <div className='runningmovies_list-container'>
                        <h1>Movies in Chennai</h1>
                        <div className="movie_cards_loopp">
                            {categori.map(category => (
                                <Card className='runningmovies_cards' key={category.idCategory} >
                                    <Card.Img variant="top" src={category.strCategoryThumb} />
                                    <Card.Body className='runningmovies_card_body'>

                                        <Card.Text>
                                            <div className='movie_cards_moviename d-flex'  >
                                                <span className=' moviename' style={{ fontWeight: "bold" }} >{category.strCategory}</span>
                                            </div>
                                            <div className="movie_cards_movierateinglang d-flex gap-2">
                                                <span className="movierateing">
                                                    U/A
                                                </span>
                                                <div className="dot" >
                                                    <span className="dott"></span>
                                                </div>
                                                <span className='movielang mx-1' >
                                                    Tamil
                                                </span>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">

                                        <a href="#">Book Ticket</a>

                                    </ListGroup>

                                </Card>

                            ))}
                        </div>
                        <div className="view_all_movies" >
                            <span>View all <span>api</span>Movies</span>
                        </div>
                    </div>
                </div>
            </div ></>
    );
}

export default TopBody;