import React from 'react'
import './SearchCard.css';
import './Users.css';

import PersonIcon from '@mui/icons-material/Person';
const UserSearchResult = (props) => {

  return (
    <> 
    <div className="userDetail userHover" onClick={() => props.selectMember(props.userData)} id ={props.id}>
        <div className="userName">
            <div className="dp">
                {props.userData.intials}
            </div>
             <div className="nameandDesignation">
                <h1>{props.userData.name}</h1>
                <div className="jobProfile">
                <p className='group-icon'><PersonIcon className='icon'/> {props.userData.domain}</p>
                <p className='email'>{props.userData.email}</p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserSearchResult