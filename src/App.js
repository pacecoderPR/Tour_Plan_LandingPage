import React, { useState } from "react";
import data from "./data.js";
import Tour from "./components/Tour.js";
const App = () => {
  const [tours, setTours]=useState(data)
  function removeTour(id){
    setTours(tours.filter(tour=>tour.id !== id))
  }
  if(tours.length===0){
    return (
      <div className="refresh">
        <h2> No tour are left</h2>
        <button onClick={()=>setTours(data)}> Refresh</button>
      </div>
    )
  }
  return( <div>
    <Tour tours={tours} removeTour={removeTour}></Tour>
  </div>
  );
};

export default App;
