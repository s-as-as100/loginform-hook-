import React, { useEffect, useState } from 'react'


const SizeWindow = () => {
const[size,setSize] = useState(window.screen.width)

const actualWidth = () => {
    console.log(window.innerWidth)
    setSize(window.innerWidth)
}


useEffect(()=> {
    window.addEventListener("resize", actualWidth)

    return () => {
   window.removeEventListener("resize", actualWidth)
    }
})


    return ( 
        <div>
            <h1>Actual size of the window is: </h1>
            <h2>{size}</h2>
        </div>
     );
}
 
export default SizeWindow;