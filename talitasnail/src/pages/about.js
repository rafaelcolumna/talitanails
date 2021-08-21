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
                <br /> <br /> <br />
                <img 
                src="https://i.ibb.co/bmxGhHS/Photo-from-Raf-Col-5-removebg-preview.png"
                height='140' width='180'> 
                 </img>
                 <br /> <br /> <br /> <br />
                 <h2 style={{
                    fontFamily:'cursive',
                    fontSize:'40px',
                    
                    }}>About Me</h2>
                <br /> <br /> <br />
                <img 
                src="https://i.ibb.co/GcHpvD4/Screenshot-20210820-204302.jpg" height='150' width='150'>
                </img>
                <h4> Talita Nails is a personal-proffessional aspiration. It is a startUp company that originated in Brooklyn, NY <br /> 
                over five years ago and it is currently located in Georgia. My Goal is to make sure that any of you <br /> 
                that walk into Talita Nails; leave with a smile on your face. <br /> <br />
                Some of our services include but not limited to: <br /> 
                Manicure <br />
                Pedicure <br />
                Tech Gel<br />
                Color Gel<br />
                Sculpture Designs<br />
                and many others.</h4>
            </div> 
         </div>   
         <div>

         </div>
       </>
    )
}

export default home; 