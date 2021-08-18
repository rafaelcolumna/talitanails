import React from 'react'
import '../App.css';

function home() {
    
    return (
     <>
        <div style={{
            backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
            backgroundPosition:'center',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            alignSelf: 'center',
            size: '500px',
        }}>
            <br /> <br /> <br /> <br />
            <div className='about' style={{
                textAlign:'center',                
            }}>
                <br /> <br /> <br /> <br />
                <img 
                src="https://i.ibb.co/bmxGhHS/Photo-from-Raf-Col-5-removebg-preview.png"
                height='140' width='180'> 
                 </img>
                 <br /> <br /> <br /> <br />
            </div> 
         </div>   
         <div>

         </div>
       </>
    )
}

export default home; 