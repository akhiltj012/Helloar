import React, { useEffect, useContext } from 'react'

import { json } from 'react-router-dom'
import '../addbox/Addbox.css'
import { Authcontext} from '../Context/Authcontext'

export const Addbox = () => {
   
   let {adduser,setadduser,email,setemail,role,setrole,users,setusers}=useContext(Authcontext)
   let arr = JSON.parse(localStorage.getItem('Users')) || [];
  
   const add = (e)=>{
   
   let obj = {id:arr.length,email,role,TimeRanges}
   arr = [...arr,obj]
    localStorage.setItem('Users',JSON.stringify(arr))
    setusers(users=arr)
    setadduser(false)
   } 
   const email_fun =(e)=>{
    setemail(e.target.value)
   }
   const role_fun=(e)=>{
   setrole(e.target.value)
   }
  
  return (
    <div className='add'>
      <div>
        <img src={require('../Data/user-add (1).png')} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <div><h3>User Information</h3>
        <h4>Email of User</h4>
        <input onChange={email_fun}  />
        <h4>Role</h4>
        <select onChange={role_fun} >
          <option value={'Admin'} >Admin</option>
          <option value={'Owner'} >Owner</option>
          <option value={'Sales'} >Sales</option>
        </select>
        </div>
       
          <button onClick={()=>setadduser(false)} >Cancel</button>
          <button onClick={add} >Add</button>
       
      </div>
    </div>
  )
}
