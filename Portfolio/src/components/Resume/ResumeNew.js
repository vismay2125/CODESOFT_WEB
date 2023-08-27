import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import resume_image from "../../Assets/resume.jpg"

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid style={{marginTop:"10rem"}}>
        <Container>
          <center
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom:"1.5%"
            }}
          >
            <h1 style={{ fontSize: "2.1em" }}>
              <strong className="purple">Check My Resume Here</strong>
            </h1>
          </center>
          <Row style={{ justifyContent: "center", position: "relative",margin:"2rem auto",maxWidth:"650px" }}>
            <img src={resume_image} />
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px",marginBottom:"2rem"}}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
