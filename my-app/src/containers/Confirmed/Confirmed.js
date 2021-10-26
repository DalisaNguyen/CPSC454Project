import React from "react";
import Button from "react-bootstrap/Button";
import "./Confirmed.css";
import {useHistory} from "react-router-dom";

export default function Confirmed() {
  let histroy = useHistory();

  return (
      <div className="Confirmed">
        <br/>
        <h1 className="congrats"> Congratulations! </h1>
        <br/>
        <h2 className="subheading">Thank you for voting!</h2>
        <h2 className="subheading">Have a great day.</h2>
        <br/>

        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button block size="lg" type="submit" onClick={() => histroy.push("/login")}>
              Logout
          </Button>
        </div>

      </div>
  );
}