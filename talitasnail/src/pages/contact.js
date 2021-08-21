import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import {  Button } from '@material-ui/core';

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
                 <h2 style={{
                    fontFamily:'cursive',
                    fontSize:'40px',
                    
                 }}>
                     Contact Us</h2>
                 <h3>1145 Peachtree Industrial Blvd Suite 4B <br /> Suwanee, GA 30024</h3>
                 
                 <img 
                 src="https://i.ibb.co/0MMndXk/109779-800-445-removebg-preview.png"
                 heigth='500' width='500'>
                 </img>
                 <Link to='https://intagram.com/talita19_?r=nametag'>  <Button variant="contained" color="secondary" size="large" fullWidth> Find Us On Instagram</Button>
           </Link>
            </div> 
         </div>   
         <div>
             
         </div>
       </>
    )
}

export default home; 