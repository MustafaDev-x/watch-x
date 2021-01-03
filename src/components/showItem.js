import React from "react";
import { Link } from "react-router-dom";


function ShowItem(props) {
    return (
        <div className="col-md-2 " >
<Link to={`/TV-Show/${props.page}/${props.id}`}>
        <div >
      
          
        <h6 className="moviecard" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.3)),url(https://image.tmdb.org/t/p/original${props.image})`}}>
     
         {props.rate}/10
         </h6>
      

        <h6>{props.name} <p>{props.date}</p></h6>
        
        </div></Link></div>

    );
  }
  
  export default ShowItem;