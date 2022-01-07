import React from 'react';
import { Container, Card } from 'react-bootstrap'
import LoremIpsum from 'react-lorem-ipsum';

import EC from '../img/ErieCounty.jpeg';
import NY from '../img/NyState.png';

const About = () => {

  return (
    <>
        <Container className='text-dark about'>
            <h1 className='mt-4 text-center'>ABOUT US</h1>

            <div className='flex-wrap'>
                <div className='about-container'>
                    <div className='history'>
                        <div className='img1'>
                            <img src={EC} alt='Erie County'></img>
                        </div>
                        <div className='history-container'>
                            <h3>Our History</h3>
                            {LoremIpsum(10)}
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
        </div>
        </Container>
        


                       

        <Container className='d-flex flex-wrap justify-content-center volunteers'>
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/person-portrait_NDKEEMX5WP.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>President</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/woman-natural_X9QBBG5DZF.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>Vice President</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/deer-nature_YVQMPLACTF.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>2nd Vice President</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/boy-face_IBGY6G6AWT.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>Secretary</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/business-man_7BQNRHB6EX.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>Treasurer</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/squirrel-nature_XT2APRFPRO.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Header>Sergeant-at-Arms</Card.Header>
                <Card.Body className='bg-dark text-info'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
        </Container>
    </>
  );
}

export default About;