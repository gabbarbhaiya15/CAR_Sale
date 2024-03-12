import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Carousel_card.css';
 export default function Carouselcard({id,carimage,carname}){
    return(
        <>
        <div  className=""  id="carousalcard" >
        <img  src={carimage} alt="" id="Carimage"/>
       <div className="text_box"> <h2 className="c_text">{carname}</h2></div>
      
     
  

      
      
        </div>
     </>
    )
 }