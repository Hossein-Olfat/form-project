import {useState} from 'react';
import './form.css';
import {Input} from './input/input.js';
import {Register} from './register/register.js';
import {Success} from './success-message/success.js';
function Form(){
    const [ourform,setform]=useState({
        firstname:'',
        lastname:'',
        emailaddress:'',
        allValid:false,
    });
    function update(Inputname){
       let change_format = Inputname.split('').filter((value)=>{return value!==' '}).join('').toLowerCase();

       console.log(change_format);
    }

    return (
        <div className='form'>
            <Success/>
            <Input type='text' inputname='First Name'  changeinput={update}/>
            <Input type='text' inputname='Last Name' changeinput={update}/>
            <Input type='email' inputname='email address' changeinput={update}/>
            <Register/>
            
        </div>
    )



}



export {Form};