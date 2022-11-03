import { createContext } from "react";
import { useState } from 'react';

export const Authcontext = createContext();



export const Authprovider = ({children}) => {
    const [adduser,setadduser]=useState(false)
    let [email,setemail] = useState('');
    let [role,setrole]= useState('admin')
    let [users,setusers] =useState(JSON.parse(localStorage.getItem('Users')))

  return (
 <Authcontext.Provider value={{adduser,setadduser,email,setemail,role,setrole,users,setusers}} >{children}</Authcontext.Provider>
  )
}



