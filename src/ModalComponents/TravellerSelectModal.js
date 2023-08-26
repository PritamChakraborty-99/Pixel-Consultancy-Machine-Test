import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'



const TravellerSelectModal = ({ show, handleClose }) => {
    
    const [count1, setCount1] = useState(0); 
    const [count2, setCount2] = useState(0); 
    const [count3, setCount3] = useState(0); 

    
  function increment1() {
    setCount1(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement1() {
    setCount1(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
    }
    
  function increment2() {
    setCount2(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement2() {
    setCount2(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
  function increment3() {
    setCount3(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement3() {
    setCount3(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
     
    
  return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Travellers</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <div className='counter-button1'>
                      <div>
                      <p>Adults</p>
                      </div> 
                      <div className='increment-count'> 
                      <Button onClick={increment1}>+</Button>
                      </div>
                      
                      {count1}
                      <div className='decrement-count'>
                      <Button onClick={decrement1}>-</Button>
                      </div>
                      
                  </div>
                  <div className='counter-button2'>
                      <div>
                      <p>Children(1-14 yrs.)</p>
                      </div> 
                      <div className='increment-count'> 
                      <Button onClick={increment2}>+</Button>
                      </div>
                      
                      {count2}
                      <div className='decrement-count'>
                      <Button onClick={decrement2}>-</Button>
                      </div>
                      
                  </div>
                  <div className='counter-button2'>
                      <div>
                      <p>Infant(0-2 yrs.)</p>
                      </div> 
                      <div className='increment-count'> 
                      <Button onClick={increment3}>+</Button>
                      </div>
                      
                      {count3}
                      <div className='decrement-count'>
                      <Button onClick={decrement3}>-</Button>
                      </div>
                      
                  </div>
                  
                  
                  
              </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default TravellerSelectModal