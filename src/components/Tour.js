import Card from "./Card"
function Tour({tours,removeTour}){
  return (
    <div className ="tour">
        <h2 className ="Heading">
            Plan with Pritesh
        </h2>
         <div>
            {tours.map((tour)=>{
                return(
                    <Card tour={tour} removeTour={removeTour}></Card>
                )
            })}
         </div>
        

    </div>
  )
}

export default Tour