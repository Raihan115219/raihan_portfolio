import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Experience = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem
                  title="Elements Zero Labs"
                  icon=" ri-suitcase-fill"
                  desc="Frontend Developer (January 2023 to April-2023)"
                />
                <ServicesItem
                  title="SilverBird"
                  icon=" ri-suitcase-fill"
                  desc="Frontend Developer (June-2023 to Current)"
                />
              </div>

              <ServicesItem
                title="Freelance Project"
                icon=" ri-suitcase-fill"
                desc="Part time"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Working Experience" />
            <h3 className="mb-0 mt-4">Work for</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Passionate Frontend Developer crafting seamless user experiences
              through responsive designs, pixel-perfect implementations, and
              interactive features. Proficient in HTML, CSS, JavaScript, and
              modern frameworks like React. Dedicated to optimizing website
              performance and accessibility while staying updated with the
              latest design trends and technologies. Collaborative team player
              excited to turn creative concepts into stunning, functional
              interfaces.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
