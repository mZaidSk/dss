import React from "react";
import RightCard from "../components/common/RightCard";
import SoftService from "../components/Ifms/SoftService";
import HardService from "../components/Ifms/HardService";
import TitleBar from "../components/common/TitleBar";

const ifmsData = {
    title: "Integrated Facility Management Services",
    desc: "In addition to hard services like mechanical, electrical, and plumbing work, pest control, solid, liquid, and biomedical waste management, façade cleaning, effluent treatment, and production support services, we also offer a range of integrated service offerings that include warehouse management, airport traffic control, and multi-level parking and airport traffic control.",
};

function IfmsServise() {
    return (
        <div>
            <TitleBar title={"Integrated Facility Management Services"} />
            <RightCard
                title={ifmsData.title}
                description={ifmsData.desc}
                imgLink={"images/integratedService.jpg"}
            />
            <SoftService />
            <HardService />
        </div>
    );
}

export default IfmsServise;
