import { AppBar, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from "./style.js"
import memories from "../../images/memories.png"

const Navbar = () => {
    const classes =useStyles()
    return (
        <>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.images} src={memories} alt="icon" height="60 " />
        </AppBar>
        </>            
    )
}

export default Navbar

