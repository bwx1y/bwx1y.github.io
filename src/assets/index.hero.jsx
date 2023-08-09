import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";

import Profile from "./img/profil.png";
import data from "./data";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
    const typed = new Typed(el.current, {
      strings: ["Student.", "Progammer."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center text-light">
        <Col md="4" className="d-flex justify-content-center order-md-last" data-aos={"fade-down"} data-aos-anchor-placement={"center-bottom"}>
          <img src={Profile} alt="Profile" className="rounded-circle profile" />
        </Col>

        <Col md="5" className="order-md-first" data-aos={"fade-up"} data-aos-anchor-placement={"center-bottom"}>
          <h2>Hello, It's Me</h2>
          <h1 className="fw-bold">Nedy Nugroho</h1>
          <h2>
            And I'm a <span className="text-primary" ref={el} />
          </h2>
          <p className="my-4">
            I am a person who is always learning. But why do I always look <span className="fw-bold">stupid.</span>
          </p>
          <p className="icons">
            <a className="mx-3" href={data.MyLink.github}>
              <BsGithub size={40} />
            </a>
            <a className="mx-3" href={data.MyLink.instagram}>
              <BsInstagram size={40} />
            </a>
            <a className="mx-3" href={data.MyLink.facebook}>
              <BsFacebook size={40} />
            </a>
          </p>
          <p className="mt-3">
            <Button variant="outline-primary" className="w-auto" href={data.MyLink.contact}>
              Contact Me
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
