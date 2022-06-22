import { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/navbar";
import Team from "./screens/team";
import { Routes, Route } from "react-router-dom";
import { firebase } from "./firebase";

const db = firebase.database();

function App() {
  const [teams, setTeams] = useState(0);

  useEffect(() => {
    var teamsRef = db.ref("teams");
    teamsRef.on("value", (snapshot) => {
        // console.log(snapshot.val());
        var lTeams = Object.keys(snapshot.val());
        lTeams = lTeams.map((team, i) => {
          return team.replace(/ /g, "").toLowerCase();
        })
        setTeams(lTeams);
        console.log(lTeams);
    })
}, [])

  return (
    <div className="App">
      <Navbar teams={teams} />
      <Routes>
        {teams &&
          teams.map((team, i) => (
            <Route path={`/teams/${team}`} element={<Team />} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
