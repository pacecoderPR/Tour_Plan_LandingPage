import React, { useState } from "react";
import data from "./data.js";
import Tour from "./components/Tour.js";
const App = () => {
  const [tours, setTours]=useState(data)
  function removeTour(id){
    setTours(tours.filter(tour=>tour.id !== id))
  }
  return( <div>
    <Tour tours={tours} removeTour={removeTour}></Tour>
  </div>
  );
};

export default App;
