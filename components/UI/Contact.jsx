import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Crafting an engaging contact section requires a frontend
              developers expertise in blending aesthetics and functionality.
              From intuitive forms to interactive maps, seamless integration
              ensures a user-friendly experience. Effective frontend development
              harmonizes design and code, fostering connections between users
              and businesses.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Rajshahi - Bangladesh</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>aburaihan115219@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+8801720681694</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://github.com/Raihan115219">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i className="ri-github-line"></i>
                </a>
              </Link>
              <Link href="https://www.facebook.com/Raihan115219">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/abu-raihan-lin/">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
