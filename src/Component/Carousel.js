import React, { useState } from 'react';
import Data from  './Data.json';
import Carouselcard from './Carousel_card';
import '../CSS/Test.css';


const Test = ({records}) => {
  

  return (
    <div className='carousel'>
    <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <main id="carousel">
  {records.map((d,i)=>(
  <div className="item " key={i} >
   <div class=" ">
    <Carouselcard
      id={d.id}
      carimage={d.carimage}
      carname={d.carname}
     

/>
</div>

  </div>
))}
    </main>
    </div>
  );
}

export default Test;
