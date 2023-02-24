import './success.css';
function Success({show}){

    return (
        <>
        {
        
        show &&
                    <div className='success'>
                        <span className='success-text'>success !  thank you for registering</span>
                    </div>
            
                        
        }
        </>
    )
}
        
export{Success};