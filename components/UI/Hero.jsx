import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";
import profile from "../../public/images/porf.jpg";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Md Abu Raihan</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                I am fascinated about working on front end development. I love
                to work in Front Part. Actually visualization attracts me a lot
                in development field. So will take myself on that basis. I also
                love to explore new things as well. So it will gorgeous for
                mine. And also would love to work with team meets for some
                create new in development.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1FEchrFMhmgeT4jzLkj7yikBKBTpvZk_Y/view?usp=share_link">
                    <a rel="noreferrer" target="_blank">
                      Download CV
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={profile} width="400" height="500" />
              <div className={`${classes.hero__skills} `}>
                <h6>Skills</h6>
                <div className="bg-transparent">
                  <h6 className="mb-1 bg-transparent">
                    TypeScript || React JS || Next JS || Node js || MongoDB
                  </h6>
                </div>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1 Year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
