import { Table,TableBody,TableHead,TableRow,TableCell,makeStyles,Button} from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getusers } from '../services/Api'
import { deleteUser } from '../services/Api'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    table: {
      width: '90%',
      minWidth: 700,
      margin:'50px 0 0 50px' ,
    },
    head:{
        '&>*':{
            background:"#000",
            color:"#fff"
        }
    },
    row:{
        "& > *":{
            fontSize:"15px"
        }
    }
  });

function AllUser() {

    const classes = useStyles();
    const [user,setUser] =useState([])
 
    const getAllusers = async ()=>{
        const res =await getusers()
        setUser(res.data)
    }
    useEffect(()=>{
        getAllusers() 
 
     },[])

     const deleteUsers =async(id)=>{
         await deleteUser(id);
         getAllusers();

     }

    return (
        <>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.head}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map(u=>(
                        <TableRow 
                        key={u.id} 
                        className={classes.row}>
                            <TableCell>{u.id}</TableCell>
                            <TableCell>{u.name}</TableCell>
                            <TableCell>{u.username}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>{u.phone}</TableCell>
                            <TableCell>
                                <span style={{display:"flex"}}>
                                <Button variant="contained"
                                 color="primary"
                                 style={{marginRight:10,fontSize:"10px"}}
                                 component={Link}
                                 to={`/edit/user:${u.id}`}
                                 >Edit</Button>
                                <Button variant="contained" 
                                color="secondary"
                                style={{fontSize:"10px"}}
                                onClick={()=> deleteUsers(u.id)}
                                >Delete</Button>
                                </span>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>
            
        </>
    )
}

export default AllUser
