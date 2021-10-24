import React from "react";
import "./Candidates.css";
import { Card, CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

export default function Candidates(){
    let histroy = useHistory();

    const handleSubmit = (name) => {
        console.log(`candidate ${name}`);
    };

    return (
        <div className="Candidates">
            <br />
            <h1 className="heading">Candidates</h1>
            <br />
            <CardGroup>
                <Card className="cursor" onClick={() => handleSubmit("cand1")}>
                    <Card.Body>
                        <Card.Title>Candidate 1</Card.Title>
                        <Card.Subtitle>
                            Card1 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 1
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand2")}>
                    <Card.Body>
                        <Card.Title>Candidate 2</Card.Title>
                        <Card.Subtitle>
                            Card2 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 2
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand3")}>
                    <Card.Body>
                        <Card.Title>Candidate 3</Card.Title>
                        <Card.Subtitle>
                            Card3 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 3
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
            <br />
            <br />
            <CardGroup>
                <Card className="cursor" onClick={() => handleSubmit("cand4")}>
                    <Card.Body>
                        <Card.Title>Candidate 4</Card.Title>
                        <Card.Subtitle>
                            Card4 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 4
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand5")}>
                    <Card.Body>
                        <Card.Title>Candidate 5</Card.Title>
                        <Card.Subtitle>
                            Card5 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 5
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand6")}>
                    <Card.Body>
                        <Card.Title>Candidate 6</Card.Title>
                        <Card.Subtitle>
                            Card6 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 6
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
        
                    </Card.Footer>
                </Card>
            </CardGroup>
            <br />
            <br />
            <CardGroup>
                <Card className="cursor" onClick={() => handleSubmit("cand7")}>
                    <Card.Body>
                        <Card.Title>Candidate 7</Card.Title>
                        <Card.Subtitle>
                            Card7 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 7
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand8")}>
                    <Card.Body>
                        <Card.Title>Candidate 8</Card.Title>
                        <Card.Subtitle>
                            Card8 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 8
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   
                    </Card.Footer>
                </Card>
                <Card className="cursor" onClick={() => handleSubmit("cand9")}>
                    <Card.Body>
                        <Card.Title>Candidate 9</Card.Title>
                        <Card.Subtitle>
                            Card9 subtitle
                        </Card.Subtitle>
                        <br />
                        <Card.Text>
                            Description for Candidate 9
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
        
                    </Card.Footer>
                </Card>
            </CardGroup>

            <br />

            <Button block size="lg" type="submit"
                    onClick={() => histroy.push("/voted")}>
                Next
            </Button>
        </div>
    );
}