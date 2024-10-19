import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Container, Card, Row, Col, Accordion, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";

const Home = () => {
  const words = ["GDGC", "Learn", "Grow", "Succeed"];
  const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]; // Google colors

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleType = (count) => {
    setCurrentColor(colors[count % colors.length]); // Change color for each word
  };

  const handleDone = () => {
    console.log("Typing finished!");
  };

  const faqs = [
    {
      question: "What is GDGC?",
      answer:
        "GDGC stands for Global Developer Growth Community. We aim to support developers in enhancing their skills through workshops, events, and community collaborations.",
    },
    {
      question: "How can I join GDGC?",
      answer:
        "You can join by signing up on our website. We offer free access to a wide range of resources, events, and collaborative opportunities.",
    },
    {
      question: "Are GDGC events free?",
      answer:
        "Most of our events and workshops are free. Some specialized courses may have a fee, but we strive to keep things accessible for all developers.",
    },
    {
      question: "How do I become a mentor?",
      answer:
        "To become a mentor, please fill out the mentor application form available on our website. Our team will review your experience and skills and get back to you.",
    },
  ];

  const teamMembers = [
    {
      name: "John Doe",
      position: "Lead Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTODhj3Ap6bYRSRCMNKix7E9xY2dvdHyZPQ&s",
      description: "Expert in full-stack development and cloud computing.",
    },
    {
      name: "Jane Smith",
      position: "UI/UX Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
      description: "Creative designer with a focus on user-centric interfaces.",
    },
    {
      name: "Michael Lee",
      position: "Project Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4LAqlO0MWJt_12uP6ZCMTv5zqEpWtY9aSw&s",
      description: "Experienced manager leading the GDGC's web projects.",
    },
  ];

  const domains = [
    {
      title: "Web Development",
      description:
        "At GDGC, we focus on modern web development technologies, teaching how to build responsive, dynamic websites using the latest frameworks and tools.",
      image:
        "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
      bgColor: colors[0], // Google blue
    },
    {
      title: "Cybersecurity",
      description:
        "Learn about cybersecurity best practices, penetration testing, and safeguarding systems from potential threats at GDGC.",
      image:
        "https://securitybrief.com.au/uploads/story/2024/01/23/img-phgGD6uBKIdsiU2tWlXWV3Ui.webp",
      bgColor: colors[1], // Google red
    },
    {
      title: "Cloud Computing",
      description:
        "We dive into cloud infrastructure, helping developers learn to work with cloud platforms such as AWS, Google Cloud, and Azure.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuP6FmBBjOpwJO5kfzaU9lveAKYANLYnS7AA&s",
      bgColor: colors[2], // Google yellow
    },
    {
      title: "AI/ML",
      description:
        "Master the concepts of Artificial Intelligence and Machine Learning, and how these technologies are shaping the future of innovation.",
      image:
        "https://media.licdn.com/dms/image/D5612AQHjDGhc8cNfJA/article-cover_image-shrink_720_1280/0/1704439037481?e=2147483647&v=beta&t=wSs9ZAGGWfx_9TAfotJLRY87JtMQPhKo7wNAh1-inU0",
      bgColor: colors[3], // Google green
    },
  ];

  return (
    <>
      <Container className="home" fluid>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Teams</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="typewriter-container">
          <span style={{ color: currentColor, fontWeight: "bold" }}>
            <span>Welcome to </span>
            <Typewriter
              words={words}
              loop={20}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </div>
        {/* "Join Us" Button */}
        <div className="join-us-button-container">
          <Button className="join-us-button" href="#join">
            Join Us
          </Button>
        </div>
        <img
          src={c1}
          alt=""
          style={{ position: "relative", marginTop: "-100px" }}
        />
        <img
          src={c2}
          alt=""
          style={{
            position: "relative",
            marginLeft: "1100px",
            marginTop: "-500px",
          }}
        />
        <img
          src={c3}
          alt=""
          style={{ position: "absolute", marginTop: "-700px" }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Team Section */}
        <section className="team-section" style={{ position: "relative" }}>
          <h2 className="team-heading">Meet Our Team</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col xs={12} md={4} key={index} className="team-card-col">
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {member.position}
                    </Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        <section className="faq-section">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <Accordion
            style={{
              backgroundColor: "#212529",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "25%",
            }}
          >
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        {/* Domains Section */}
        <section className="domains-section">
          {domains.map((domain, index) => (
            <Row
              key={index}
              className="domain-row"
              style={{ backgroundColor: domain.bgColor }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Text on the Left, Image on the Right */}
                  <Col xs={12} md={6} className="domain-text">
                    <h2>{domain.title}</h2>
                    <p>{domain.description}</p>
                  </Col>
                  <Col xs={12} md={6} className="domain-image">
                    <img src={domain.image} alt={domain.title} />
                  </Col>
                </>
              ) : (
                <>
                  {/* Image on the Left, Text on the Right */}
                  <Col xs={12} md={6} className="domain-image">
                    <img src={domain.image} alt={domain.title} />
                  </Col>
                  <Col xs={12} md={6} className="domain-text">
                    <h2>{domain.title}</h2>
                    <p>{domain.description}</p>
                  </Col>
                </>
              )}
            </Row>
          ))}
        </section>
        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="GDGC Logo" />
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Home;
