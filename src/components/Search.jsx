import React from 'react';
import './SearchCard.css';
import { useState } from "react";
import UserResult from './UserSearchResult';
import CloseIcon from '@mui/icons-material/Close';
const Search = (props) => {
  const [member2, setMember] = useState([]);
  console.log(member2)
  const employee = props.data;
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) =>{
    const wordSearched = event.target.value.toLowerCase();
    const newFiltered = employee.filter((value)=>{
      return value.name.toLowerCase().includes(wordSearched) || value.email.toLowerCase().includes(wordSearched);
    });

    if(wordSearched === "")
    {
      setFilteredData([]);
    }
    else
    {
      setFilteredData(newFiltered);
    }
    console.log(newFiltered)
  };

  const handleClose = () => {
    setMember([]);
  }

  // setFilteredData(filter);
  return (
  <>

      <div className="search">
        <input type="text" name="search" onChange={handleFilter} placeholder={props.placeholder}  className='input' id="" />
        <button>Add CSM</button>
      </div>
      { member2.length !==0 &&(
      <div className="tags-conatiner">
                {member2.map((value,key) => {
          return(
            <div className="tags">
            <p>{value.name}</p>
              <CloseIcon onClick={handleClose} className='closeIcon close'/>
          </div>
      
          )

        })}
         
      </div>
      )  
    }
      {filteredData.length !== 0 && (
      <div className="searchResultContainer">
        {filteredData.map((value,key) => {
          return(
            <UserResult onlClick = { () => props.sendData(member2)}   selectMember = {member => setMember(member2.concat(member))} key={key} userData = {value} id={value.id} />
          )

        })}
    </div>
      )}

</>
    
  )
}

export default Search