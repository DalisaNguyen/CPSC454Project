import Button from "@restart/ui/esm/Button";
import React from "react";
import { useHistory } from "react-router-dom";



const Voted = (props) => {
  const {candidateNames} = props;
  let history = useHistory();

  return (
    <div>
      <h1> Displays candidate that the user voted for and contains back and submit button </h1>
      {/* {candidateNames.candidates_name[0]} */}
      {candidateNames}
    <Button
        block
        size="lg"
        type="submit"
        onClick={() => history.push("/candidates")}
      >
        Back
      </Button>
    </div>
  );
};

export default Voted;
