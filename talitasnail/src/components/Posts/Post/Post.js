import React from 'react';
import useStyles from './styles';

const Post = () =>{

    const classes = useStyles();
    return (
        <>
            <h1 className={classes.new}>POST</h1>
        </>
    );
}

export default Post;