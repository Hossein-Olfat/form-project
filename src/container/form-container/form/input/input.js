import './input.css';
function Input({type,inputname,changeinput}){
    
    return(
        <div className='Input-container'>
           
            <input onChange={()=>{changeinput(inputname)}} className='Input' placeholder={inputname} type={type}/>

           

            <div className='error'>
               <p className='error-text'>please enter {type==='email' ? 'an':'a'} {inputname}</p>
            </div>
                
           
        </div>
    )
};



export {Input};