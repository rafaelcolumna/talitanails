import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import {GoogleLogin} from 'react-google-login';
import {  Button } from '@material-ui/core';

const responseGoogle = (response) => {
    console.log(response);
  };

function home() {
    
    return (
        <>
        <div 
        style={{
            backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
            backgroundPosition:'center',
            backgroundSize:'100%',
            backgroundRepeat:'no-repeat',
            alignSelf: 'center',
            size: '500px',
        }}>
            <br /> <br /> <br /> <br />
            <div className='home'>
                <h2 style={{
                    fontFamily:'cursive',
                    fontSize:'70px',
                    }}>Welcome to</h2>
                <br /> <br /> <br /> 
                <img 
                src="https://i.ibb.co/1LNf95Y/Photo-from-Raf-Col-2-removebg-preview-4.png"
                height='350' width='450'> 
                 </img>
            </div> 
            <br /> <br /> <br /> 
            <div className='button' style={{
                textAlign:'center',
                fontSize:'30px',
            }}>
           <Link to='/about'>  <Button variant="contained" color="secondary" size="large" fullWidth>Learn About Us</Button>
           </Link>
            
           <Link to='/contact'>  <Button variant="contained" color="secondary" size="large"  fullWidth>Contact Us</Button>
           </Link>
            </div>
            <br /> <br /> <br /> <br />
            <GoogleLogin style={{
                alignSelf:'center',
                alignItems:'center',
                textAlign:'center',
                alignContent:'center',
            }}
    clientId="778300900672-56r21a6b0knehuragqn8a3hjl5e8ovaf.apps.googleusercontent.com"
    buttonText="Book Appointment"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <br /> <br /> <br /> <br /> <br /> <br />
        </div>
       </>
    )
}

export default home; 