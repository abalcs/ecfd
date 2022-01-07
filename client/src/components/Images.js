import React from "react";
import Carousel from "react-elastic-carousel";

import Hydrant from '../img/hydrant.jpg'
import Fighters from '../img/firefighters.jpg'
import Station from '../img/station.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function Images() {

  return (

    <div className="App pt-4 bg-light">
      <div className="carousel-wrapper">
        <Carousel fade breakPoints={breakPoints}>

            <img src={Hydrant} alt='Fire Hydrant'/>
            <img src={Fighters} alt='Firefighters in action'/>
            <img src={Station} alt='The firehall'/>
        
        </Carousel>
      </div>
    </div>
  );
}

export default Images;