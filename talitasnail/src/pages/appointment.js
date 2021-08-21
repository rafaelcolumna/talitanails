import React from 'react'
import '../App.css';

function appointment() {
    
    return (
     <>
        <div style={{
            backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
            backgroundPosition:'center',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            alignSelf: 'center',
        }}>
            <br /> <br /> <br /> <br />
            <div className='about' style={{
                textAlign:'center',                
            }}>
                <br /> <br /> <br /> <br />
                <img 
                src="https://i.ibb.co/bmxGhHS/Photo-from-Raf-Col-5-removebg-preview.png"
                height='200' width='250'> 
                 </img>
                 <br /> <br /> <br /> <br />
                 <h2 style={{
                    fontFamily:'cursive',
                    fontSize:'70px',
                    color:'red',
                    }}>Feature Not Available.<br /> Don't Worry You Will Soon Be Able <br />To Schedule Your Appoinments.</h2>
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div> 
         </div>   
         <div>
             
         </div>
       </>
    )
}

export default appointment; 