import React from "react";
import TitleBar from "../components/common/TitleBar";
import OtherServiceInfo from "../components/otherService/OtherServiceInfo";

function OtherService() {
    return (
        <div>
            <TitleBar title={"Other Service"} />
            <OtherServiceInfo />
        </div>
    );
}

export default OtherService;
