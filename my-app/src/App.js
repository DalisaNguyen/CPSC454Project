import React, { useState } from "react";
import Login from "./containers/Login/Login";
import "./containers/Login/Login.css";
import Candidates from "./containers/Candidates/Candidates";
import Voted from "./containers/Voted/Voted";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [candidateName, setCandidateName] = useState("");

  const handleCandidate = (name) => {
    console.log(`candidate ${name}`);
    setCandidateName(name);
};
  // const [candidateName, setCandidateName] = useState({candidates_name:[]});

  // const handleCandidate = (name, value) => {
  //   console.log(`candidate ${value}`);
  //   setCandidateName((preValue) => {
  //     return {[name]: value}
  //   });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/candidates">
              <Candidates candidateNames={candidateName} handleCandidate={handleCandidate}/>
            </Route>
            <Route exact path="/voted">
              <Voted candidateNames={candidateName}/>
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
