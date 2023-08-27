import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vismay Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />Pursing My Graduation from Lalbhai Dalpatbhai  College of Engineering
            <br />
            <br />
            Inquisitive, energetic computer science learner skilled in leadership, with a strong foundation in math, logic, and crossplatform coding.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoy With Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            The Quote I follow - 
            <br />
            "Anything can be Happen with HardWork & Dedication !"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
