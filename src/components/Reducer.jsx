import React, { useReducer } from 'react'


const initialState = 0 ;

const reducer = (state,action) => {

    if(action.type === "INCREMENT") {
        return state + 1
    }
    if(action.type ==="DECREMENT")  {
        return state -1

    } 
    
        return state;
    
}


const Reducer = () => {
     
    const [state, dispatch] = useReducer(reducer, initialState)

     
    return ( 

        <div>


            <h1>{state}</h1>
  <button  onClick ={()=> dispatch({type :"INCREMENT"})} >INCREMEBT</button>
  <button  onClick ={()=> dispatch({type :"DECREMENT"})} >DECREMENT</button>

        </div>
     );
}
 


export default Reducer;