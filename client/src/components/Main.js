import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
// import Button from 'react-bootstrap/Button';

const Main = () => {

  return (
    <>
    <main>
        <img src="https://www2.erie.gov/fire/sites/www2.erie.gov.fire/files/uploads/FireSafetyLogo.jpg" alt='Erie County FD Emblem'></img>
        <p>Serving our Community Since 1776</p>
        <button className='eventsBtn'>EVENTS</button>
    </main>

    <section className='news'>
        <h2>NEWS:</h2>
        <p>{LoremIpsum(10)}</p>
        <button className='newsBtn'>FIND OUT MORE</button>
    </section>

    <section className='events'>
        <h2>UPCOMING EVENTS</h2>
        <p>No upcoming events.</p>
    </section>

    <section className='contact'>
        <h2>CONTACT US</h2>
        <p>Erie County Fire Distric Officers Association</p>
        <a href="mailto:email@example.com"><button className='contactBtn'>GET IN TOUCH!</button></a>
    </section>
    </>
  );
}

export default Main;