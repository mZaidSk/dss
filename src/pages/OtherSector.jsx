import React from "react";
import TitleBar from "../components/common/TitleBar";
import RightCard from "../components/common/RightCard";

const otherData = {
    title: "Other",
    description:
        "We also serve clients in the real estate, sports clubs, media and entertainment, automotive, IT/ITES, and media and entertainment sectors. We are one of the few integrated services providers in the nation that offers facilities management services to retail centers and commercial buildings. Additionally, businesses in the hospitality, media, and entertainment industries, as well as locations with spiritual and religious value, make up our clientele.",
    imgLink: "images/otherSector.jpg",
};

function OtherSector() {
    return (
        <div>
            <TitleBar title={"Other Sector"} />
            <RightCard
                title={otherData.title}
                description={otherData.description}
                imgLink={otherData.imgLink}
            />
        </div>
    );
}

export default OtherSector;
