import React from "react";
import TitleBar from "../components/common/TitleBar";
import AboutUs from "../components/About/AboutUs";
import VS from "../components/About/VS";
import CoreValues from "../components/About/CoreValues";

function About() {
    return (
        <div>
            <TitleBar title="About Us" />
            <AboutUs />
            <VS />
            <CoreValues />
        </div>
    );
}

export default About;
