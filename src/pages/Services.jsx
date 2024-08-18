import React from "react";
import TitleBar from "../components/common/TitleBar";
import AllService from "../components/Services/AllService";

function Services() {
    return (
        <div>
            <TitleBar title="Services" />
            <AllService />
        </div>
    );
}

export default Services;
