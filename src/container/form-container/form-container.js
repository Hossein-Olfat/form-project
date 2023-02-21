import './form-container.css';
import {Form} from './form/form.js';

let x=3;
function Form_Container(){
    return (
        <div className='form-container'>
            <Form/>
        </div>
    )
}

export {Form_Container};