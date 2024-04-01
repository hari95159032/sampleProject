import React from "react";
import { useNavigate } from "react-router";
let About=()=>{
    const navigateBackToHome=useNavigate();
    return(
    <>
        <h3>Harikrishna</h3>
        <button className="btn btn-primary" onClick={()=>navigateBackToHome('/',{replace:true})}>Back To Home</button>
    </>

);
}
export default About