import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

const Main = () => {

  return (
    <main className='bg-light text-center'>
   
      <div className='news bg-dark text-light'>
          <h2>NEWS:</h2>
          <p>{LoremIpsum(10)}</p>
          <Button href='#' variant='success' size='lg' className='buttons'>FIND OUT MORE</Button>
      </div>

      <div className='events bg-light'>
          <h2>UPCOMING EVENTS</h2>
          <p>No upcoming events.</p>
      </div>

      <div className='contact bg-dark text-light d-flex text-center'>
          <h2>CONTACT US</h2>
          <p>Erie County Fire Distric Officers Association</p>
          <Button href='mailto:email@example.com' variant='success' size='lg' className='buttons'>GET IN TOUCH</Button>
      </div>
      
    </main>
  );
}

export default Main;