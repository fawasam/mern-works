import React, { useEffect, useState } from 'react'
import { TextField , Button ,Typography ,Paper } from '@material-ui/core'
import FileBase64 from 'react-file-base64';
import { useSelector,useDispatch } from 'react-redux'


import useStyles from "./styles.js"
import { createPost,updatePost } from '../../actions/posts.jsx'


const Form = ({currentId,setCurrentId}) => {

    const classes =useStyles()
    const [postData ,setPostData] =useState({creator :"" , title:"" ,message:"",tags:"", selectedFile:""})
    const dispatch =useDispatch()
    const post =useSelector((state) => currentId ? state.posts.find((p)=>p._id===currentId):null)


    useEffect(()=>{
        if(post) setPostData(post)
    },[post])
    

    //submit data
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(createPost(postData))
        console.log(postData);

        if(currentId) {
            dispatch(updatePost(currentId ,postData))
            clear()
        }else{
            dispatch(createPost(postData))
        }
        clear()
    }

    //cleara section
    const clear=()=>{
        setCurrentId(null)
        setPostData({creator :"" , title:"" ,message:"",tags:"", selectedFile:""})

    }
    return (
        <Paper className={classes.paper}>
            <form action="" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit the ': 'Creating a'}  Memory</Typography>
                <TextField name="creator" required="true" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="tile" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(",")})}/>
                <div className={classes.fileInput}>
                    <FileBase64 type="file"  multiple={false} onDone={({base64}) =>setPostData({...postData,selectedFile:base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" type="submit" fullWidth onClick={clear}>clear</Button>
            </form>
        </Paper>
    )
}

export default Form
