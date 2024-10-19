import React from "react";
import vid from "../assets/vid.mp4";
import { Container, Row } from "react-bootstrap";
import Typingtext from "../Components/typingtext";
// import rbt from "./Assets/robot.png"
// import rbt1 from "./Assets/robot1.png"

const Hero = () => {
  return (
    <>
      <div className="bgover" style={{ position: "absolute" }}>
        <video src={vid} autoPlay loop muted />

        <div className="content">
          <Container style={{ position: "relative", top: "-40px" }}>
            <Row>
              {/* <Col lg={3} md={6} sm={12}>
                                {/* <img src={rbt} className = "rbtimg" alt="" /> */}

              {/* </Col> */}
              {/* <Col lg={12} md={12} sm={12} className='homecontent'> */}
              {/* <h1 style={{fontSize:"70px"}}>Welcome To ESDS</h1>
                                <p>Welcome to the World of Possibilities</p> */}
              <Typingtext />
              {/* </Col> */}
              {/* <Col lg={3} md={6} sm={12}> */}

              {/* <img src={rbt1} className = "rbtimg1" alt="" /> */}
              {/* </Col> */}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
