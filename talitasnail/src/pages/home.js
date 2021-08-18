import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import {GoogleLogin} from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  };

function home() {
    
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
            <div className='home'>
                <h2>Welcome to</h2>
                <br /> <br /> <br /> <br />
                <img 
                src="https://i.ibb.co/1LNf95Y/Photo-from-Raf-Col-2-removebg-preview-4.png"
                height='350' width='450'> 
                 </img>
            </div> 
            <br /> <br /> <br /> <br />
            <div className='button'>
           <Link to='/about'>  <button className='buttonH'> Learn About Us </button>
           </Link>
           <Link to='/contact'>  <button className='buttonC'> Contact us </button>
           </Link>
            </div>
            <br /> <br /> <br /> <br />
            <GoogleLogin
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