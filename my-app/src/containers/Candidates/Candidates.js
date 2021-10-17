import React from "react";
import "./Candidates.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

// https://react-bootstrap.github.io/components/cards/

export default function Candidates(){
    let histroy = useHistory();

    return (
        <div className="Candidate">
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Candidate 1</Card.Title>
                    <Card.Text>
                    Description of Candidate 1
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button block size="lg" type="submit"
                    onClick={() => histroy.push("/voted")}>
                Next
            </Button>
        </div>
    );
}