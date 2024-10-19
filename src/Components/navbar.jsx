import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
const Navbar1 = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="" width={500} style={{ padding: "50px" }} />
      </Container>
    </Navbar>
  );
};

export default Navbar1;
