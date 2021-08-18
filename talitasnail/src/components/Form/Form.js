import React, {useState} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message:'', selectedFile:''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }
    const clear = () =>{

    }
    
    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant='h6'>Let us know your experience</Typography>
                    <TextField 
                    name="creator" 
                    variand="outlined" 
                    label="Creator" 
                    fullWidth
                    value= {postData.creator}
                    onChange={(e) => setPostData({... postData, creator: e.target.value})}
                    />
                        <TextField 
                    name="title" 
                    variand="outlined" 
                    label="Title" 
                    fullWidth
                    value= {postData.title}
                    onChange={(e) => setPostData({... postData, creator: e.target.value})}
                    />
                        <TextField 
                    name="message" 
                    variand="outlined" 
                    label="Message" 
                    fullWidth
                    value= {postData.message}
                    onChange={(e) => setPostData({... postData, creator: e.target.value})}
                    />
                     
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(base64) => setPostData({ ... postData, selectedFile: base64})} />    
                    </div>
                    <Button className={classes.buttonSubmit} variant ="contained" color="fuchsia" size="large" type="submit" fullWidth>Submit</Button>
                    <Button  variant ="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear Form</Button>
                </form>
            </Paper>
        </>
    );
}

export default Form;