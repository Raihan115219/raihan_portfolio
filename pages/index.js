import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import Experience from "../components/UI/Experience";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}
