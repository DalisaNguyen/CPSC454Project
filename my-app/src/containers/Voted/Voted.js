import Button from  "react-bootstrap/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Voted.css";

const Voted = (props) => {
  const {candidateNames} = props;
  let history = useHistory();

  return (
    <div className="Voted">
      <h1 className="heading"> Review your selection </h1>
      <br/>
      <div className="text">
        <h4>You chose {candidateNames}. Click "Back" if you would like to choose a different candidate or click "Confirm". </h4>
        <br/>
        Note: You will not be able to change your vote after this.
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
