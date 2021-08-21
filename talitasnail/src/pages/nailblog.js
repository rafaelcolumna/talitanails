import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import '../App.css';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';



function Nailblog() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        }, [dispatch]);

     return(
            <div style={{
                backgroundImage: `url("https://i.ibb.co/ZdYbKqG/Photo-from-Raf-Col.jpg")`,
                backgroundPosition:'center',
                backgroundSize:'100%',
                backgroundRepeat:'no-repeat',
                alignSelf: 'center',
                size: '500px',
            }}>
                <Container maxWidth="lg">
                        <Grow in>
                    <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                    </Container>
                </Grow>
                </Container>
            </div>
    );
}  

export default Nailblog;