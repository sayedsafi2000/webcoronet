"use client"
import React from "react";
import ThreeVerticalLines from "./components/threeVerticalLines";
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
            <Herotext/>
            <Service/>
            <Portfolio/>
            <ProjectDev/>
            <Advertise/>
            <Agency/>
            <MidSectionReadmore/>
            <GrateClient/>
            <GetInTOuch/>
        </div>
    );
};

export default Home;
