// import React, {useState} from 'react'

// const LoginForm = () => {
//     const [email,setEmail] =useState("")
//     const [password,setPassword] = useState("")

//     const [allEntry,setAllEntry] = useState([])

//     const submitForm = (e) => {
//         e.preventDefault()

//    const newEntry =   { email, password}

//    setAllEntry([...allEntry,newEntry])
       
//     }


//     return ( 
//         <form action="" onSubmit ={submitForm} >
//           <div className="em">
//               <label htmlFor="email">Email</label>
//               <input 
//                onChange = {(e) =>setEmail(e.target.value)}
//               type="text" name ="email" id="email" autoComplete="off" 
//                   value = {email}/>

//         </div>
//         <div className="pass">
//               <label htmlFor="password">Password</label>
//               <input
//                onChange = {(e) =>setPassword(e.target.value)} type="password" name ="password" id="password" 
//               value= {password}
//               autoComplete="off"/>

//         </div>
//    <button  className="btn" type="submit">LoginIn</button>

//    <div>
//      {
//          allEntry.map((curElm) => {
//              return (
//                  <div>
//                       <h1>{curElm.email}</h1>
//                       <h2>{curElm.password}</h2>
//                  </div>
//              )
//          })
//      }

//    </div>

//         </form>
        
        
//      );

      
// }
 
// export default LoginForm;