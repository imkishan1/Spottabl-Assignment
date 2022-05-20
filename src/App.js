import "./App.css";
import Title from "./components/Title";
import "./components/team.css";
import Search from "./components/Search";
import "./components/SearchCard.css";
import "./components/UserCard.css";
import Users from "./components/Users";
import { useState } from "react";
function App() {


   
const [employee, setEmployee] = useState([

  {
    id:1,
    name: "priyanka singh",
    intials: "ps",
    domain: "Senior recruiter",
    email: "priyanka@spottabl.com",
  },
  {
    id:2,
    name: "Ajith KP",
    intials: "ak",
    domain: "Associate principal-Leadership hiring",
    email: "ajith@spottabl.com",
  },
  {
    id:3,
    name: "Arbaaz khatri",
    intials: "AK",
    domain: "Talent acquisition specialist",
    email: "arbaz@spottabl.com",

  },
  {
    id:4,
    name: "Swandhir pundeel",
    intials: "sp",
    domain: "Senior Manager",
    email: "swandhir@spottabl.com",
  },
  {
    id:5,
    name: "Vanishri",
    intials: "v",
    domain: "Client manager",
    email: "vanishri@spottabl.com",
  },
  {
    id:6,
    name: "Vishal N",
    intials: "v",
    domain: "Senior Manager-Recruitment Success",
    email: "vishal@spottabl.com",
  },
  {
    id:7,
    name: "Vidya Nagesh",
    intials: "vn",
    domain: "Recruitment Success",
    email: "vidyaspottabl.com",
  },

]);

  const [team, setTeam] = useState([

    {
      id:1,
      name: "Chilman Mehrotra",
      intials: "cm",
      domain: "Client Manager",
      email: "chilman@spottabl.com",
    },
    {
        id:3,
        name: "saboor sirwal",
        intials: "ss",
        domain: "recruitment process",
        email: "saboor@spottabl.com",
      },
    {
        id:4,
        name: "Smriti wadhwa",
        intials: "sw",
        // domain: "Senior Manager",
        email: "pundeel@spottabl.com",
      },

  ])



  return (
    <div className="App">
      <div className="basecard">
        <Title />
        <div className="card">
          <h1 className="head">Customer Success Managers</h1>
          <Search  data = {employee} placeholder={"Add by Name or Email"}/>
          <div className="userListing">
            {team.map((user) =>(
              <Users key ={user.id} users ={user}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
