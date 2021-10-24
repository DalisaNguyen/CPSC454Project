import React from "react";
import "./Candidates.css";
import { Card, CardGroup, ToggleButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const candidates = [
  {
    candidate_name: "candidate 1",
    subtitle: "card 1 subtitle",
    description: "description for cand 1",
  },
  {
    candidate_name: "candidate 2",
    subtitle: "card 2 subtitle",
    description: "description for cand 2",
  },
  {
    candidate_name: "candidate 3",
    subtitle: "card 3 subtitle",
    description: "description for cand 3",
  },
  {
    candidate_name: "candidate 4",
    subtitle: "card 4 subtitle",
    description: "description for cand 4",
  },
  {
    candidate_name: "candidate 5",
    subtitle: "card 5 subtitle",
    description: "description for cand 5",
  },
  {
    candidate_name: "candidate 6",
    subtitle: "card 6 subtitle",
    description: "description for cand 6",
  },
  {
    candidate_name: "candidate 7",
    subtitle: "card 7 subtitle",
    description: "description for cand 7",
  },
  {
    candidate_name: "candidate 8",
    subtitle: "card 8 subtitle",
    description: "description for cand 8",
  },
  {
    candidate_name: "candidate 9",
    subtitle: "card 9 subtitle",
    description: "description for cand 9",
  },
];

export default function Candidates(props) {
  const { candidateNames, handleCandidate } = props;

  let history = useHistory();

  const handleSubmit = (name) => {
    // console.log(`candidate ${name}`);
  };

  return (
    <div className="Candidates">
      <br />
      <h1 className="heading">Candidates</h1>
      <br />
      {/* <ToggleButtonGroup 
                onChange={(value) => {
                    console.log(value);
                    handleCandidate("candidates_name", value);
                }}
                defaultValue={candidateNames.candidates_name}
                name="candidates_name"
                type="checkbox"
        > */}
      <div
        style={{
          width: "95%",
          margin: "0 35px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {candidates.map((candidate, index) => {
          return (
            <>
              <div>
                <Card
                  key={index}
                  className="cursor"
                  onClick={() => handleCandidate(candidate.candidate_name)}
                >
                  <Card.Body>
                    <Card.Title>{candidate.candidate_name}</Card.Title>
                    <Card.Subtitle>{candidate.subtitle}</Card.Subtitle>
                    <br />
                    <Card.Text>{candidate.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <ToggleButton id="cand1" value="cand1"/> */}
                    <ToggleButton
                      id={candidate.candidate_name}
                      value={candidate.candidate_name}
                      checked={candidateNames === candidate.candidate_name}
                    >
                      VOTE
                    </ToggleButton>
                  </Card.Footer>
                </Card>
              </div>
              {/* {(index + 1) % 3 === 0 && (
                <>
                  <br />
                  <br />
                </>
              )} */}
            </>
          );
        })}
      </div>

      <Button
        block
        size="lg"
        type="submit"
        onClick={() => history.push("/voted")}
      >
        Next
      </Button>
    </div>
  );
}
