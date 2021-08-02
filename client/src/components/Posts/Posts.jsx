import React from 'react'
import Post from './Post/Post'
import useStyles from "./styles.js"
import { useSelector } from 'react-redux'
import { Grid ,CircularProgress } from '@material-ui/core'

const Posts = ({setCurrentId}) => {

    const classes =useStyles()
    const posts =useSelector((state) => state.posts)
    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch'>
                {posts.map((p)=>(
                    <Grid item  key={p._id}  xs={12} sm={6}>
                        <Post post={p} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
