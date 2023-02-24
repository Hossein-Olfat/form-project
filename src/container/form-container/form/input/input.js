import React, { Children } from 'react';
import './input.css';
function Input({type,inputname,changeinput,show,_value}){
                    
 
    return(
        <div className='Input-container'>
           
            <input onkeypress="return event.which != 32" value={_value} onChange={(e)=>{changeinput(e,inputname)}} className='Input' placeholder={inputname} type={type}/>
            
                {
                    show && 
                    <div>
                    <p className='error-text'>please enter {type==='email' ? 'an':'a'} {inputname}</p>
                </div>
                
                }
            
        </div>
                
    )
           
};



export {Input};