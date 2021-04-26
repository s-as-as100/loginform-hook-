import React,{useState} from 'react'

// const ToggleHook = () => {


//     const[toggle,setToggle] = useState("harry");


//     const toggleClick = () => {
//         // console.log(" im clicked")
//         let event  =toggle;
//         // if(event === "harry" ) {
//         //     setToggle("potter")
//         // } else {
//         //     setToggle("harry")
//         // } 
//         (event === "harry") ? setToggle("potter") : setToggle("harry")
//     }
    
//     return ( 
//         <div>
//             <h1>{toggle}</h1>
//             TOGGLE  CHALLENGE

//             <button onClick={()=>{toggleClick()}} >ToggleButton</button>
//         </div>
//      );
// }
 
// export default ToggleHook;

// const ArrayAdd = () => {
    
//  const employees = [ {
//     id: 1,
//     name:"potter",
//     salary:7000
// },
// {
//    id: 2,
//    name:"potter1",
//    salary:17000
// },{
//    id: 3,
//    name:"potter2",
//    salary:13000
// },{
//    id: 4,
//    name:"potter3",
//    salary:9000
// },
// ]


// const [ myArr, setMyarr] = useState(employees)
// const clearMe = () => {
//     console.log("clear me")
//      setMyarr([])
// }




//     return (  
 
//     <div>
//         <ul>
//         <h1>use State using array</h1>

//          {
//              myArr.map((employee) => <div key ={employee.id}>
//                  <li>{employee.name}</li>
//                  <li>{employee.salary}</li>
//              </div> 
//                )
//          }
//          </ul>

//          <button  onClick={clearMe}  >clear me</button>
//     </div>
     
//     );
// }
 
// export default ArrayAdd;


// const removeElement = (id) => {
//     alert(id)
// }

// const Toddo = () => {
//     return ( 
//         <div>
//             {/* <h1>Toddo Lists </h1>
//              {
//                  employees.map((employee) => {
//                      return (
// <button  onClick = {() => removeElement(curElm.id)}   ></button>
//                      )
//                  } )
//              }

//  */}

//         </div>
//      );
// }
 
// export default Toddo;


// short chircuit evalautions
// const ShortCircuit = () => {
//  const [demo,setDemo] = useState("")
    
//     return ( 
      
// <div>
//     <h1>{demo || "tec"}</h1>
//     <h1>{demo&& "vino"}</h1>
// </div>

//      );
// }
 
// export default ShortCircuit;