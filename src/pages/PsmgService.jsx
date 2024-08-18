import React from "react";
import TitleBar from "../components/common/TitleBar";
import PsmgServiceInfo from "../components/psmg/PsmgServiceInfo";

function PsmgService() {
    return (
        <div>
            <TitleBar title={"Private Security and Manned Guarding"} />
            <PsmgServiceInfo />
        </div>
    );
}

export default PsmgService;
