import React from "react";
import TitleBar from "../components/common/TitleBar";
import RightCard from "../components/common/RightCard";

const privateSecurityData = {
    title: "Private Security",
    description:
        "In a number of industries, including real estate, sports teams, media and entertainment, the automobile industry, and IT/ITES, we offer complete private security solutions. Our advanced security measures, which are customized to each client's specific demands, include access control, surveillance, and patrols. Additionally, we specialize in providing integrated security management for establishments such as shopping malls, office buildings, hotels, and places of great spiritual or religious significance.",
    imgLink: "images/banner.jpg",
};

function PrivateSecuritySector() {
    return (
        <div>
            <TitleBar title={"Private Security Sector"} />
            <RightCard
                title={privateSecurityData.title}
                description={privateSecurityData.description}
                imgLink={privateSecurityData.imgLink}
            />
        </div>
    );
}

export default PrivateSecuritySector;
