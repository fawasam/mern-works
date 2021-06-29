import React from 'react'
import { FormControl,FormGroup,InputLabel,Input,Button,makeStyles,Typography } from '@material-ui/core';
import { useState } from 'react';
// import { addUser } from '../services/Api';
import { editUser } from '../services/Api';
import { useHistory,useParams } from 'react-router';
import { useEffect } from 'react';
import { getusers } from '../services/Api'

const useStyle=makeStyles({
    container:{
        width:"50%",
        margin: "auto",
        marginTop:70
    },
    inputs:{
        marginTop:15
    }
})

const initial ={
    name:"",
    username:"",
    email:"",
    phone:""
}

const EditUser = () => {
    const [user,setUser] =useState(initial)
    const {name,username,email,phone}=user;
    const history =useHistory()
    console.log(history);
    const {id} =useParams()
    let paramId =id.slice(1)
    const classes =useStyle()

    useEffect(()=>{
        loadUserData();
    },[])

    const loadUserData = async()=>{
       const res = await getusers(paramId)
       setUser(res.data)
    }

    const onValuChange = (e)=>{
        e.preventDefault()
       setUser({...user,[e.target.name]:e.target.value})
    }

    const editUserDetails =async () =>{ 
        if(user.name === "" || user.email==="")
        {
            alert("Please Fill the form \nCredential Error")
        }
        else{

            await editUser(paramId,user)
            history.push("/all-user")
        }
    }

    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">EDIT USER</Typography>
            <FormControl className={classes.inputs} >
                <InputLabel>Name</InputLabel>
                <Input
                onChange={(e)=>{onValuChange(e)}}
                name="name"
                value={name}
                required
                />
            </FormControl>
            <FormControl className={classes.inputs}>
                <InputLabel>Username</InputLabel>
                <Input
                onChange={(e)=>{onValuChange(e)}}
                name="username"
                value={username}
                required

                />
            </FormControl>
            <FormControl className={classes.inputs}>
                <InputLabel>Email</InputLabel>
                <Input
                onChange={(e)=>{onValuChange(e)}}
                name="email"
                value={email}
                required

                />
            </FormControl>
            <FormControl className={classes.inputs}>
                <InputLabel>Phone</InputLabel>
                <Input
                onChange={(e)=>{onValuChange(e)}}
                name="phone"
                value={phone}
                required

                />
            </FormControl >
            <Button variant="contained" color="primary"
            className={classes.inputs}
            onClick={()=>editUserDetails()}
            >Edit user</Button>
        </FormGroup>
        </>
    )
}

export default EditUser
