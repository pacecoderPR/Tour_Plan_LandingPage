import { useState } from "react";

function Card({tour,removeTour}){
    const [readMore, SetReadMore]=useState(false)
    const description= readMore ? tour.info : tour.info.slice(0,200)
function readMoreHandler(){
 SetReadMore(!readMore)
}
 return(
    <div>
        <h2> I am here</h2>
        <img src={tour.image} className="image"></img>
        <div className="tour-info">
            <h4 className="tour-price">
            {tour.price}
            </h4>
            <h4 classname="tour-name">{tour.name}</h4>
        </div>
        <div className="description">
            {description}
            <span className="read-more" onClick={readMoreHandler}>
                {readMore?` show-less`:` read-more`}
            </span>
        </div>
        <div className="btn-red" onClick={()=>removeTour(tour.id)}>
            <button>Not Interested</button>
        </div>
    </div>
 )
}
export default Card;