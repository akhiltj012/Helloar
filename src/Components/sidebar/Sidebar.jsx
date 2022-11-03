import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import '../sidebar/sidebar.css'
import { useState } from 'react'

export const Sidebar = () => {
  let [color1,setcolor1]=useState('white')
  let [color2,setcolor2]=useState('white')
  let [color3,setcolor3]=useState('white')
  let [color4,setcolor4]=useState('white')
  let [color5,setcolor5]=useState('white')
  let [color6,setcolor6]=useState('white')
    let navigate =useNavigate();
  return (
 <div className='sidebar_main' >
    <div onMouseEnter={()=>setcolor1('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor1('white')} style={{'background-color':`${color1}`}}  ><h3 onClick={()=>navigate('/')}>Products</h3></div>
    <div onMouseEnter={()=>setcolor2('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor2('white')} style={{'background-color':`${color2}`}}> <h3 onClick={()=>navigate('/Demoscript')} >Demo script</h3></div >
    <div onMouseEnter={()=>setcolor3('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor3('white')} style={{'background-color':`${color3}`}} ><h3 onClick={()=>navigate('/Customers')} >Customers</h3></div>
    <div onMouseEnter={()=>setcolor4('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor4('white')} style={{'background-color':`${color4}`}} ><h3 onClick={()=>navigate('/Salesteam')} >Sales Team</h3></div>
    <div onMouseEnter={()=>setcolor5('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor5('white')} style={{'background-color':`${color5}`}} ><h3 onClick={()=>navigate('/Demos')} >Demos</h3></div>
    <div onMouseEnter={()=>setcolor6('rgb(0, 249, 21)')} onMouseLeave={()=>setcolor6('white')} style={{'background-color':`${color6}`}}><h3 onClick={()=>navigate('/Settings')} >Settings</h3></div>
    </div>
  )
}
