import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';

let HomePage=()=>{
    const navigateToAbout=useNavigate();
    return (
        <>
        <nav>
            <Link to='/demo1' element={<Demo1/>}>Demo1</Link>
            <Link to='/demo2' element={<Demo2/>}>Demo2</Link>
            <Link to='/demo3' element={<Demo3/>}>Demo3</Link>
        </nav>
        <Outlet></Outlet>
        <button className="btn btn-success" onClick={()=>navigateToAbout('/about',{replace:true })}>Click to Know Me</button>
        </>
    );
}
export default HomePage