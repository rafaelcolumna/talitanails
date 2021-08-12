import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

function home() {
    return (
        <>
        <div style={{
            backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            alignSelf: 'center'
        }}>
            <div className='home'>
                <h2>Welcome to</h2>
                <img 
                src="https://i.ibb.co/1LNf95Y/Photo-from-Raf-Col-2-removebg-preview-4.png"
                height='350' width='450'> 
                 </img>
            </div> 
            
            <div className='button'>
           <Link to='/about'>  <button className='buttonH'> Learn About Us </button>
           </Link>
           <Link to='/contact'>  <button className='buttonC'> Contact us </button>
           </Link>
            </div>
        </div>
       </>
    )
}

export default home; 