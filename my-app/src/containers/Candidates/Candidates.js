import React from "react";
import "./Candidates.css";
import { Card, CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

export default function Candidates(){
    let histroy = useHistory();

    return (
        <div className="Candidate">
            <br />
            <CardGroup>
                <div class="card">
                    <Card>
                        <Card.Body>
                            <Card.Title>Candidate 1</Card.Title>
                            <Card.Text>
                                Description for Candidate 1
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                        </Card.Footer>
                    </Card>
                </div>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 2</Card.Title>
                        <Card.Text>
                            Description for Candidate 2
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 3</Card.Title>
                        <Card.Text>
                            Description for Candidate 3
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
            <br />
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 4</Card.Title>
                        <Card.Text>
                            Description for Candidate 4
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 5</Card.Title>
                        <Card.Text>
                            Description for Candidate 5
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 6</Card.Title>
                        <Card.Text>
                            Description for Candidate 6
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
        
                    </Card.Footer>
                </Card>
            </CardGroup>
            <br />
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 7</Card.Title>
                        <Card.Text>
                            Description for Candidate 7
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 8</Card.Title>
                        <Card.Text>
                            Description for Candidate 8
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Candidate 9</Card.Title>
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