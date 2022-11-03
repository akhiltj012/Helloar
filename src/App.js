
import './App.css';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/sidebar/Sidebar';
import { Allroutes } from './Routes/Allroutes';
import { useContext } from 'react';
import { Authcontext } from './Components/Context/Authcontext';
import { Addbox } from './Components/addbox/Addbox';



function App() {
  const {adduser,setadduser} = useContext(Authcontext)
 

  return (
    <div className="App">
    <div  onClick={()=>setadduser(false)} ><Header /></div>
    <div >
    <div onClick={()=>setadduser(false)} ><Sidebar/></div>
    <div><Allroutes /></div>
    </div>
    {adduser?<Addbox/>:''}
    </div>
    
  );
}

export default App;
