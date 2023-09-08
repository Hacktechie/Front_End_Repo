import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import '../stylesheets/topbody.css'
import { IoIosArrowDown } from 'react-icons/io'
import { movies } from '../../data/movies'

const TopBody = () => {

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

  const [viewAll, setViewAll] = useState(false)

  return (
    <>
      <div className='container-flow container-lg d-flex justify-content-center px-0 py-4'>
        
        {/* filter sidebar */}

        <Card className='movies_filter_card'
          style={filter_card}>

          <div className='movies_filter-container'>

            <div className="laguage_filter">

              <div className='dropdown-container ' onClick={toggleRadioVisibility}>
                
                <span>Languages</span>
                <div className='arrow'>
                  <IoIosArrowDown size={22} style={{ transform: `rotate(${rotationAngle}deg)` }} />
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
                  <IoIosArrowDown size={22} style={{ transform: `rotate(${rotationAngl}deg)` }} />
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

        {/* Movie grid */}

        <div className='runningmovies_list-container'>
          <h1>Movies in Chennai</h1>
          <div className="movie_cards_loopp" style={{ height: viewAll ? 'auto' : '1360px' }}>
            {movies.map(movie => (
              <Card className='runningmovies_cards' key={movie.contentId} >
                <Card.Img variant="top" src={movie.imgPath} alt={movie.label} />
                <Card.Body className='runningmovies_card_body'>

                  <div>
                    <div className='movie_cards_moviename d-flex'  >
                      <span className='moviename' style={{ fontWeight: "bold" }} >{movie.label}</span>
                    </div>
                    <div className="movie_cards_movierateinglang d-flex gap-2">
                      <span className="movierateing">
                        {movie.censor}
                      </span>
                      <div className="dot" >
                        <span className="dott"></span>
                      </div>
                      <span className='movielang mx-1' >
                        {movie.language}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              
                <ListGroup className="list-group-flush">
                  <a href="#">Book Ticket</a>
                </ListGroup>

              </Card>
            ))}
          </div>

          <div className="text-center" >

            <button
              className='btn fw-semibold border rounded-pill mt-4'
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? `View Less` : `View all ${movies.length} movies`}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default TopBody;