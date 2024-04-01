import { NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

let Header=()=>{

    const applyStyle=({isActive})=>{
        return {

            fontWeight:isActive?'bold':'normal',
            color: isActive?'yellow':'black',
            
        }
    }
    return (
    
    <>
        <nav className='parentNav' >
            <NavLink className="btn btn-primary" style={applyStyle} to='/' element={<HomePage />}>HomePage</NavLink>
            <NavLink className="btn btn-primary" style={applyStyle} to='/user' element={<UserPage />}>UserPage</NavLink>
        </nav>

    
    </>
);}
export default Header