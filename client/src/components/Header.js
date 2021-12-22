import React from 'react';

const Header = () => {

  return (
    <header>
        <ul>
          <a href='/'><li>HOME</li></a>
          <a href='/about'><li>ABOUT US</li></a>
          <a href='/members'><li>ASSOCIATE MEMBERS</li></a>
          <a href='/events'><li>EVENTS</li></a>
        </ul>
    </header>
  );
}

export default Header;
