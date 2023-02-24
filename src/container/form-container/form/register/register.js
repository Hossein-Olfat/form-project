import './register.css';
function Register({registering}){

    return (
        <button onClick={()=>{registering()}} className='register' type='submit'>Register</button>
    )
}

export {Register};