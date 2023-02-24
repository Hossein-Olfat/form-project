import {useState} from 'react';
import './form.css';
import {Input} from './input/input.js';
import {Register} from './register/register.js';
import {Success} from './success-message/success.js';


function Form(){
    const [ourform,setform]=useState([
        {firstname:'',show_error:[false,0]},
        {lastname:'',show_error:[false,0]},
        {emailaddress:'',show_error:[false,0]},
    ]);
    const [allvalid,setall]=useState(false);
   
       
    function update(event,Inputname){
        event.preventDefault();
       let change_format = Inputname.split('').filter((value)=>{return value!==' '}).join('').toLowerCase();
       let _event =event.target.value.trim();
       let remove_space = _event.split('').filter((v,index)=>{return v!==' ' || _event[index+1]!==' '}).join('');
       
    let result = ourform.map((value)=>{
        if(value.hasOwnProperty(change_format)){
            
           if(value.show_error[0]){
              let sample= {[change_format]:remove_space,show_error:[false,1]};

             if(!sample[[change_format]]){
                sample.show_error[0]=true;
                return sample;
             }else{
                return sample;
             }
             
           }else if(remove_space.length===0 && value.show_error[1]===1){
            
            return {[change_format]:remove_space,show_error:[true,1]}

           }
           else if(!value.show_error[0] && value.show_error[1]===1){
            
            return {[change_format]:remove_space,show_error:[false,1]};
            
            }else if(!value.show_error[0] && value.show_error[1]===0){
                
                return {[change_format]:remove_space,show_error:[false,0]}
            }
           
        }
        else{
            return value;
        }
    });
    console.log(remove_space);
    setform(result);
}
       
           
function register_component(){
    
    const collect_key =ourform.map((value)=>{
       const keys = Object.keys(value);
       return keys[0];
    });
    console.log(collect_key);
    let values =ourform.map((value,index)=>{
       if( value[collect_key[index]]===''){
            value.show_error=[true,1];
            return value;
       }else{
        value.show_error=[false,1];
        return value;
       }
    });
    console.log(values);

   let checkallvalid =values.every((value,index)=>{
    return value[collect_key[index]];
   });

   if(checkallvalid){
        setall(true);

        setTimeout(()=>{
            setall(false);
        },2000);

        setform([
            {firstname:'',show_error:[false,0]},
            {lastname:'',show_error:[false,0]},
            {emailaddress:'',show_error:[false,0]}
        ]);
            
   }else{
    setall(false);
    setform(values);
   } 

    // setform(values);
    
}
 
    return (
        <div className='form'>

            <Success show={allvalid}/>

            <div className='inputs'>
            <Input _value={ourform[0].firstname} show={ourform[0].show_error[0]} type='text' inputname='First Name'  changeinput={update}></Input>
            <Input _value={ourform[1].lastname}  show={ourform[1].show_error[0]} type='text' inputname='Last Name' changeinput={update}/>
            <Input _value={ourform[2].emailaddress} show={ourform[2].show_error[0]} type='email' inputname='email address' changeinput={update}/>
            </div>

            <Register registering={register_component}/>
            
        </div>
            
            )

                
            

            



}



export {Form};