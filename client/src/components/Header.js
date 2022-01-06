import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar bg="dark" expand="lg" sticky='top'>
      <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto toggle'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className='navLink ms-5' href="/">HOME</Nav.Link>
              <Nav.Link className='navLink ms-5' href="/about">ABOUT US</Nav.Link>
              <Nav.Link className='navLink ms-5' href="/members">MEMBERS</Nav.Link>
              <Nav.Link className='navLink ms-5' href="/events">EVENTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    // <Navbar expand='lg' className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //   <ul className='container justify-content-center'>
    //     <a className='navbar-brand text-light' href='/'><li>HOME</li></a>
    //     <a className='navbar-brand text-light ms-3' href='/about'><li>ABOUT</li></a>
    //     <a className='navbar-brand text-light ms-3' href='/members'><li>ASSOCIATE MEMBERS</li></a>
    //     <a className='navbar-brand text-light ms-3' href='/events'><li>EVENTS</li></a>
    //   </ul>
    // </Navbar>
  );
}

export default Header;
