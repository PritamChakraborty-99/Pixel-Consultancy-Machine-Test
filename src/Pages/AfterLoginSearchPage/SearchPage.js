import React, { useEffect, useState } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col,  Form, Row } from 'react-bootstrap';
import TravellerSelectModal from '../../ModalComponents/TravellerSelectModal';



const SearchPage = () => {

    // for Button Clicked Opening Return Date
    const [roundTripButtonClicked, setRoundTripButtonClicked] = useState(false)
    const [buttonVal, setButtonVal] = useState(1)

    // For Traveller Select
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      infant: 0,
    });
    
    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
  





    // Function For Select Button
    const selectButton = (val) => {
        setButtonVal(val)        
    }
    useEffect(() => {
        if (buttonVal == 2) {
            setRoundTripButtonClicked(true)
        }
        else {
            setRoundTripButtonClicked(false)
        }
    }, [buttonVal])
    
    // Function For Select button ends

    // Handle Close For Traveller Modal





    return (
    <>
            <div className='header-buttons'>
                <Button variant="primary" onClick={()=>selectButton(1)} >OneWay</Button>{' '}
                <Button variant="primary" onClick={()=>selectButton(2)} >RoundTrip</Button>{' '}
                <Button variant="primary">Multicity</Button>{' '}         
            </div>
            <div >
                <Form  >
                    <Row className="g-2">
                    <Col md>
                    <label htmlFor="Preferred Class">Flying From</label>         
                            <Form.Select aria-label="Floating label select example">
                            <option value="Preferred Class">Preferred Class</option>
                    </Form.Select>
                        </Col>
                        <div className='svg-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                        </svg>

                        </div>
                        
                        <Col md>
                    <label htmlFor="Preferred Class">Flying To</label>         
                    <Form.Select aria-label="Floating label select example">
                    </Form.Select>
                </Col>
                    
                    
                    <div className="col-md-4">
                        <Form.Group controlId="dateofdepature" name='dateofdep'>
                            <Form.Label>Departure Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Departure Date" />
                        </Form.Group>
                    </div>
                   {buttonVal==2 ? roundTripButtonClicked && <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Return Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Return Date" />
                        </Form.Group>
                    </div>: ""}
                    <Col md>
                            
                            <label htmlFor="Preferred Class">Traveller(s)</label>
                            <Form.Control size="lg" type="text" placeholder="Large text" onClick={() => setOpenOptions(!openOptions)}
                            value={`${options.adult} adult · ${options.children} children · ${options.infant} infant`}
                            />  
                            {/* {openOptions && (
                                <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.adult}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children (1-14yrs)</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "d")}
                                            >
                                                -
                                            </button>
                                            <span className="optionCounterNumber">
                                                {options.children}
                                            </span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "i")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                      <span className="optionText">Infant(0-2 yrs)</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.infant <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("infant", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.infant}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("infant", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                                </div>
                                )}
                                 */}
                            
                    
                            
                    
                    </Col>
                    <Col md>
                    <label htmlFor="Preferred Class">Preferred Class</label>         
                     
                    <Form.Select aria-label="Floating label select example">
                    <option value="Preferred Class">Preferred Class</option>
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                     </Form.Select>
                </Col>
                    </Row>
                    <Button variant="primary">SUBMIT</Button>{' '}
              

                </Form>

                

           

                

            </div>


    </>
     
  )
}

export default SearchPage