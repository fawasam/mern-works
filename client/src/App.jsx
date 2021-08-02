import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Container , AppBar , Typography ,Grow ,Grid } from "@material-ui/core"
import { getPosts } from './actions/posts.jsx'

import useStyles from "./app.js"
import memories from "./images/memories.png"
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
    const [currentId,setCurrentId] =useState(null)
    const classes =useStyles()
    const dispatch =useDispatch()

    
    useEffect(()=>{
        dispatch(getPosts());
    },[ currentId, dispatch])


    return (
        <Container maxWidth="lg">
            <Navbar/>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                                  Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container >
                    <Grid container justify="space-between" className={classes.mainContainer} alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId}/>                           
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form setCurrentId={setCurrentId} currentId={currentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
      </Container>
    )
}

export default App