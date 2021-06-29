import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles} from "@material-ui/core"
import {NavLink} from 'react-router-dom'

const useStyle =makeStyles ({
    header:{
        background: "#111"
    },
    nav:{
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft:30
    },
    tab:{
     color: "#fff",
     textDecoration:"none",
     marginRight:20,
     fontSize:20

    }
})
const Navbar = () => {
const classes =useStyle()
    return (
        <div>
            <AppBar position="static" className={classes.header}>
                <Toolbar className={classes.nav}>
                <NavLink to="/" exact className={classes.tab}>CRUD</NavLink>
                <div>
                <NavLink to="/add-user" exact className={classes.tab}>ADD USER</NavLink>
                <NavLink to="/all-user" exact className={classes.tab}>ALL USER</NavLink>
                </div>

                
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
