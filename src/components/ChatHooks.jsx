import React, {useState,useEffect} from 'react'


const ChatHook = () => {

  const [count,setCount] =useState(0)

  useEffect(() => {
      document.title = count > 0 ? `Chats ${count}` : `Chats `
      console.log(useEffect)
  },[])


    return (  
        <div>
            <h1>Use Effect To perform sideEffects!</h1>
            <h2>{count}</h2>
            <button onClick= {() => setCount(count+1)} >CLick me</button>


        </div>
    );
}
 
export default ChatHook;