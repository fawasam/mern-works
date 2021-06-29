import React from 'react'
import { FormControl,FormGroup,InputLabel,Input,Button,makeStyles,Typography } from '@material-ui/core';
import { useState } from 'react';
import { addUser } from '../services/Api';
import { useHistory } from 'react-router';

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

const AddUser = () => {
    const [user,setUser] =useState(initial)
    const {name,username,email,phone}=user;
    const history =useHistory()

    const classes =useStyle()

    const onValuChange = (e)=>{
        e.preventDefault()
       setUser({...user,[e.target.name]:e.target.value})
       console.log(user);
    }
    const addUserDetails =async () =>{
        if(user.name === "" || user.email==="" || user.phone==="")
        {
            alert("Please Fill the form \nCredential Error")
        }
        else{

            await addUser(user)
            history.push("/all-user")
        }
    }


    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">ADD NEW USER</Typography>
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
            onClick={()=>addUserDetails()}
            >Add user</Button>
        </FormGroup>
        </>
    )
}

export default AddUser
