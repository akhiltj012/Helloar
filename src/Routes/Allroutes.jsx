import { Route,Routes } from "react-router-dom"; 
import React from 'react'
import { Settings } from "../Components/Body/Settings";
import { Demoscript } from "../Components/Body/Demoscript";
import { Customers } from "../Components/Body/Customers";
import { Salesteam } from "../Components/Body/Salesteam";
import { Demos } from "../Components/Body/Demos";
import { Products } from "../Components/Body/Products";

export const Allroutes = () => {


  return (
    <Routes>
       <Route path="/" element={<Products/>}> </Route>
        <Route path="/Settings" element={<Settings />}> </Route>
        <Route path="/Demoscript" element={<Demoscript/>}> </Route>
        <Route path="/Customers" element={<Customers/>}> </Route>
        <Route path="/Salesteam" element={<Salesteam/>}> </Route>
        <Route path="/Demos" element={<Demos/>}> </Route>
    </Routes>
  )
}
