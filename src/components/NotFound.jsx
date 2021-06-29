import React from 'react'
import {Link} from "react-router-dom"
const NotFound = () => {
    return (
        <div>
        <img 
        style={{
            width: "100%",
            height: "600px",
            objectFit:"cover",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            marginTop:"30px"
        }}
        src="https://i.stack.imgur.com/WOlr3.png" alt="" />
        <Link 
        style={{
            color: "#000",
            textDecoration:"none",
        }}
        to="/" exact>Go to Home</Link>        
        </div>
    )
}

export default NotFound
