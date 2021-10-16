import React from "react";
import "./Candidates.css";
import { Card } from "react-boostrap";

// https://react-bootstrap.github.io/components/cards/

const Candidates = () => {
    return (
        <div className="Candidate">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Candidates;