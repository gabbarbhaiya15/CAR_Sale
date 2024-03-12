import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Card.css';
 export default function CarCard({id,carimage,year,feul,carname,speeds,steering,peoples,price}){
    return(
        <>
        <div  className=""  id="card" >
        <img  src={carimage}
         alt="" id="CarImage"/>
        <div className="name-year">
        <h3 className="">{carname}</h3>
        <div className="" id="year">
            <h5>{year}</h5>
        </div>
      </div>

      <div class="layout">
  <div className=" d-flex">
    <img src="Images/people.png" alt="" id="icon"/>
    <p>{peoples} people</p>
    </div>
  <div class=" d-flex">
  <img src="Images/fuel.png" alt=""  id="icon"/>
    <p>{feul}</p></div>
  <div class= "ml-2 d-flex">
  <img src="Images/speed.png" alt=""  id="icon"/>
    <p>{speeds}</p></div>
  <div className="d-flex">
  <img src="Images/automatic.png"alt=""  id="icon"/>
    <p>{steering}</p></div>

</div>

<div class="line"></div>

<div className="last-bar">
<h4 className="d-flex m-2" >{price}/<h6>month</h6></h4>

<div className="like-rent">
<button className="btn rounded-4 " id="LikeButton" ><img src="Images/like.png" alt="" id="icon"/></button>
<button type="button" class="btn btn-primary rounded-4 ">Rent Now</button>
</div>
   
    </div>

      
      
        </div>
     </>
    )
 }