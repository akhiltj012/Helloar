import React, { useEffect, useContext } from 'react'

import '../Body/Settings.css'
import { Authcontext } from '../Context/Authcontext'

export const Settings = () => {
 
  let {adduser,setadduser,email,setemail,role,setrole,users,setusers}=useContext(Authcontext)
 let adduser_fun=()=>{
  setadduser(true)
  console.log(users);
  
 }
 let deleted = (e)=>{
  setadduser(false)
    let arr = [];
   for(let i=0;i<users.length;i++){
     if(users[i].id!=e.id && users[i].email!=e.email ){
      
      arr.push(users[i])
     }
     console.log(e.email,users[i].email);
   }
   setusers(users=arr)
   localStorage.setItem('Users',JSON.stringify(users))
   
   
 }
  
  return (
    <div className='settings_main'  >
    <button onClick={adduser_fun}  > Add User </button>
    <table >
      <thead>
        <td>#</td>
        <td>User</td>
        <td>Last Signed In</td>
        <td>Role</td>
        <td></td>
       </thead>
      <tbody>
      
      {users?users.map((e)=>{
        return(
          <tr>
           <td>{e.id}</td>
           <td>{e.email}</td>
           <td>Just Now</td>
           <td>{e.role}</td>
           <td>  <img  onClick={()=>deleted(e)} src={require('../Data/trash (1).png')} /></td>
           </tr>
        )
           
      }):''}
       
       </tbody>
    </table>
   
    </div>
  )
}
