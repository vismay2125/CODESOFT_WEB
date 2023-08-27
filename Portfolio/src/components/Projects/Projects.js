import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mi from "../../Assets/Projects/mi.jpg";
import ecm from "../../Assets/Projects/ecommerce.avif";
import chat from "../../Assets/Projects/chatweb.avif";

function Projects() {
  return (
    <>
    <Container fluid style={{marginTop:"5rem"}}>
    
      <Container>
        <center><h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1></center>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecm}
              isBlog={false}
              title="E-Commerce-Site"
              description="This eCommerce site, built with React.js and powered by Strapi, offers a seamless platform to purchase electronics like smartwatches, earbuds, and speakers. It features a user-friendly interface for browsing products, detailed product pages, and a secure payment gateway for smooth transactions. Customers can manage accounts, explore product categories, and access an admin dashboard for efficient product and order management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-Web"
              description="A real-time chat web application developed using Socket.io that enables instant communication between users. It utilizes WebSockets to achieve low-latency messaging and updates, providing a dynamic and interactive chat experience. Users can join rooms, exchange messages, view active participants, and receive real-time notifications, making it ideal for collaborative discussions and engagement."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mi}
              isBlog={false}
              title="MIstore"
              description="he Mi Store clone site, crafted in React.js, mirrors the renowned Xiaomi online store's layout and functionality. It showcases an array of Xiaomi products, including smartphones, gadgets, and accessories, offering users an immersive shopping experience. With responsive design and intuitive navigation, customers can explore product categories, view detailed specifications, and add items to their cart. Seamless checkout and secure payment integration further enhance the shopping process, making it a faithful reproduction of the original Mi Store."
            />
          </Col>

        </Row>
      </Container>
      </Container>
      </>

  )
}

export default Projects;
