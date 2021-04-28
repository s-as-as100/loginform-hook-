import React from 'react'

const employees = [ {
    id:1,
    name:"mohd",
    salary : 5000
} , {
    id:1,
    name:"mohd1",
    salary : 15000
} , {
    id:1,
    name:"mohd2",
    salary : 35000
} , {
    id:1,
    name:"mohd3",
    salary : 25000
} , {
    id:1,
    name:"mohd4",
    salary : 65000
} ]


const RenderList = () => {
    return (  
     <div>
         <ul>
              {
                  employees.filter( (employees) =>employees.salary >50000 ).map((employee) => <div>
                       <li>{employee.name}</li>
                       <li>{employee.salary}</li>
                       </div> )
              }
         </ul>
     </div>
    
    );
}
 
export default RenderList;