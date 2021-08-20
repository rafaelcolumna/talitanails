import React, {useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from '../actions/posts';
import '../App.css';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';



function Nailblog() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        }, [dispatch]);

     return(
        <>
            <div style={{
                        backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
                        backgroundPosition:'center',
                        backgroundSize:'100%',
                        backgroundRepeat:'no-repeat',
                        alignSelf: 'center',
                    }}>
            </div>
            <div>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-evenly" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                 <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                 <Form />
                            </Grid>
                        </Grid>  
                    </Container>
                </Grow>
            </div>
        </>
    );
}  

export default Nailblog;