"use client"
import React from "react";
import Herotext from "./components/herotext";
import Service from "./components/service";
import Portfolio from "./components/portfolio";
import ProjectDev from "./components/ProjectDev";
import Advertise from "./components/advertise";
import Agency from "./components/agency";
import MidSectionReadmore from "./components/midSectionReadmore";
import GrateClient from "./components/grateClient";
import GetInTOuch from "./components/getInTouch";

const Home = () => {
  return (
    <div className="relative z-10">
        <section aria-label="Hero section">
          <Herotext/>
        </section>
        <section aria-label="Our Services">
          <Service/>
        </section>
        <section aria-label="Portfolio">
          <Portfolio/>
        </section>
        <section aria-label="Project Development">
          <ProjectDev/>
        </section>
        <section aria-label="Advertising">
          <Advertise/>
        </section>
        <section aria-label="Agency">
          <Agency/>
        </section>
        <section aria-label="About Us">
          <MidSectionReadmore/>
        </section>
        <section aria-label="Our Clients">
          <GrateClient/>
        </section>
        <section aria-label="Get In Touch">
          <GetInTOuch/>
        </section>
      </div>
  );
};

export default Home;
