import React from 'react'
import './Users.css';
import DeleteIcon from '@mui/icons-material/Delete';
const Users = (props) => {

  return (
      <>
   <div className="userDetail" id={props.users.id}>
       <div className="userName">
           <div className="dp">
               {props.users.intials}
           </div>
           <div className="nameandDesignation">              
               <h1>{props.users.name}</h1>
               <p className='domain'>{props.users.domain}</p>
           </div>
       </div>
            <button id={props.users.id}  ><DeleteIcon/></button>
   </div>
   </>
  )

}

export default Users

