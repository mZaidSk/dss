import React from "react";
import TitleBar from "../components/common/TitleBar";
import RightCard from "../components/common/RightCard";

const RetailData = {
    title: "Retail",
    description:
        "In this industry, we offer services to branch offices and retail stores. Apart from our standard service offerings, we also offer customized specialty services like manned guarding and administrative assistance to our clients.",
    imgLink: "images/retailSector.jpg",
};

function RetailSector() {
    return (
        <div>
            <TitleBar title={"Retail Sector"} />
            <RightCard
                title={RetailData.title}
                description={RetailData.description}
                imgLink={RetailData.imgLink}
            />
        </div>
    );
}

export default RetailSector;
