import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import EC from '../img/ErieCounty.jpeg';
import NY from '../img/NyState.png';

const About = () => {

  return (
    <div className='about'>

        <h1>ABOUT US</h1>

        <div className='about-container'>
            <div className='history'>
                <div className='img1'>
                    <img src={EC} alt='Erie County'></img>
                </div>
                <div className='history-container'>
                    <h3>Our History</h3>
                    {LoremIpsum()}
                </div>
            </div>

            <div className='mission'>
                <div className='img2'>
                    <img src={NY} alt='State of NY'></img>
                </div>
                <div className='mission-container'>
                    <h3>Our Mission</h3>
                    {LoremIpsum()}
                </div>
            </div>
        </div>

        <div className='officers'>
            <h1>ASSOCIATION OFFICERS</h1>

            <div className='officer-cards'>
                <div className='card1'>
                    <h3 className='title'>President</h3>
                    <img className='cardImg' alt='President'></img>
                    <h5 className='name'>John Doe</h5>
                    <h5 className='subtitle'>Commissioner</h5>
                    <h5 className='district'>Some District</h5>
                </div>

                <div className='card2'>
                    <h3 className='title'>1st Vice President</h3>
                    <img className='cardImg' alt='1st Vice President'></img>
                    <h5 className='name'>Don Joe</h5>
                    <h5 className='subtitle'>Commissioner</h5>
                    <h5 className='district'>Some District</h5>
                </div>

                <div className='card3'>
                    <h3 className='title'>2nd Vice President</h3>
                    <img className='cardImg' alt='2nd Vice President'></img>
                    <h5 className='name'>Mr. Person</h5>
                    <h5 className='subtitle'>Commissioner</h5>
                    <h5 className='district'>Some District</h5>
                </div>

                <div className='card4'>
                    <h3 className='title'>Secretary</h3>
                    <img className='cardImg' alt='Secretary'></img>
                    <h5 className='name'>Person McPersonface</h5>
                    <h5 className='subtitle'>Secretary</h5>
                    <h5 className='district'>Some District</h5>
                </div>

                <div className='card5'>
                    <h3 className='title'>Treasurer</h3>
                    <img className='cardImg' alt='Treasurer'></img>
                    <h5 className='name'>Name Here</h5>
                    <h5 className='subtitle'>Commissioner</h5>
                    <h5 className='district'>Some District</h5>
                </div>

                <div className='card6'>
                    <h3 className='title'>Sergeant at Arms</h3>
                    <img className='cardImg' alt='Sergeant at Arms'></img>
                    <h5 className='name'>Name Here</h5>
                    <h5 className='subtitle'>Commissioner</h5>
                    <h5 className='district'>Some District</h5>
                </div>
            </div>
            
        </div>
       
    </div>
  );
}

export default About;