import React from 'react';
import { Container, Card } from 'react-bootstrap'
import LoremIpsum from 'react-lorem-ipsum';

import EC from '../img/ErieCounty.jpeg';
import NY from '../img/NyState.png';

const About = () => {

  return (
    <>

        <h1 className='pt-4 text-center'>ABOUT US</h1>

        <Container className='container text-dark d-flex flex-wrap justify-content-evenly mt-4 about' >
            
            <Card border='danger' style={{ width: '30rem' }} className='shadow mb-5 bg-body rounded about'>
                <Card.Img className='p-3' variant="top" src={EC} />
                <Card.Header className='bg-dark text-light text-center'>HISTORY</Card.Header>
                <Card.Text className='p-3'>
                    <LoremIpsum
                    avgWordsPerSentence={5}
                    avgSentencesPerParagraph={5}
                    random='false'
                    />
                </Card.Text>
            </Card>

            <Card border='danger' style={{ width: '30rem' }} className='shadow mb-5 bg-body rounded about'>
                <Card.Img className='p-3' variant="top" src={NY} />
                <Card.Header className='bg-dark text-light text-center'>MISSION</Card.Header>
                <Card.Text className='p-3'>
                    <LoremIpsum
                    avgWordsPerSentence={5}
                    avgSentencesPerParagraph={5}
                    random='false'
                    />
                </Card.Text>
            </Card>

        </Container>
    
        <h2 className='text-center mt-4'>OUR OFFICERS</h2>

        <Container className='d-flex flex-wrap justify-content-center align-items-center volunteers'>
            <Card className='ms-5 me-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>President</Card.Header>  
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/person-portrait_NDKEEMX5WP.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 me-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>Vice President</Card.Header>    
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/woman-natural_X9QBBG5DZF.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 me-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>2nd Vice President</Card.Header>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/deer-nature_YVQMPLACTF.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 me-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>Secretary</Card.Header>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/boy-face_IBGY6G6AWT.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 me-5 mt-3 mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>Treasurer</Card.Header>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/business-man_7BQNRHB6EX.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
                    <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Subtitle
                        </Card.Text>
                </Card.Body>
                <Card.Footer>District</Card.Footer>
            </Card>
            <br />
            <Card className='ms-5 me-5 mt-auto mb-5 officer' border="dark" style={{ width: '20rem' }}>
                <Card.Header>Sergeant-at-Arms</Card.Header>
                <Card.Img src='https://cdn.stocksnap.io/img-thumbs/960w/squirrel-nature_XT2APRFPRO.jpg' style={{ height: '15rem'}}></Card.Img>
                <Card.Body className='bg-dark text-light'>
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