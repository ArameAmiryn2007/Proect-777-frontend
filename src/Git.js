import { useState } from 'react';
import './Git.css';
import App from './App';
function Git(){
     const [x,setX] = useState(0)
    return(
       <div className="bac-v">
        <p className='XX' onClick={()=>{
            setX(1)
        }}>X</p>
         
        <div className='lo'>
        <p>ARIK</p>
        <p>SERVICES</p>
        <p>WORK</p>
        <p>ABOUT</p>
        <p>BLOG</p>
        <p>PAGES</p>
        </div>
       </div>
    )

    
}
export default Git