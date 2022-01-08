import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

const Main = () => {

  return (
    <main className='bg-light text-center'>
   
      <div className='news bg-dark text-light'>
        <div className='w-70 p-5'>
          <h2>NEWS:</h2>
          <p className='ms-5 me-5 fs-4 lh-lg p-5'>{LoremIpsum(10)}</p>
          <Button href='https://www.reuters.com' target='_blank' variant='success' size='lg' className='buttons'>FIND OUT MORE</Button>
        </div>
          
      </div>

      <div className='events d-flex justify-content-center flex-column bg-light p-5'>
          <h2>UPCOMING EVENTS</h2>
          <p className='fs-4 lh-lg p-5'>No upcoming events.</p>
      </div>

      <div className='contact d-flex justify-content-center flex-column bg-dark text-light d-flex text-center p-5'>
          <h2 className='fs-1'>CONTACT US</h2>
          <p className='fs-4 p-5 lh-lg'>We're looking forward to hearing from you.</p>
          <div>
            <Button href='mailto:email@example.com' variant='success' size='lg' className='buttons'>GET IN TOUCH</Button>
          </div>
      </div>
      
    </main>
  );
}

export default Main;