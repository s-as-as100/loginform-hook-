
 
import './App.css';  
import ChatHook from './components/ChatHooks';
import SizeWindow from './components/SizeWindowHook';
 
 
 
function App() {
  return (
    <div className="App">
     
       <ChatHook/>,
       <SizeWindow/>
       
    </div>
  );
}

export default App;
