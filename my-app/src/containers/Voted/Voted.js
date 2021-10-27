import Button from  "react-bootstrap/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Voted.css";

const Voted = (props) => {
  const {candidateNames} = props;
  let history = useHistory();

  return (
    <div className="Voted">
      <h1 className="votedHeading"> Review your selection </h1>
      <br/>
      <div>
        <h3 className="votedFor"> <u> You voted for: </u> </h3>
        <h4 className="votedCandidate">  {candidateNames} <br /><br/> </h4>
        <hr/>
        <h5 className="additionalText">  Click "Back" if you would like to choose a different candidate or click "Confirm". </h5>
        <br/>
        <div className="note">Note: You will not be able to change your vote after this.</div>
        <hr/>
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <Button block size="lg" type="submit" style={{ marginRight: "auto" }}
            onClick={() => history.push("/candidates")}>
            Back
        </Button>
      
        <Button block size="lg" type="submit" style={{ marginLeft: "auto" }} className="ConfirmButton"
            onClick={() => history.push("/confirmed")}>
            Confirm
        </Button>
      </div>
    </div>
  );
};

export default Voted;
