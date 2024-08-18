import React from "react";
import TitleBar from "../components/common/TitleBar";
import RightCard from "../components/common/RightCard";

const industrialData = {
    title: "Industrial",
    description:
        "Industrial security is crucial for safeguarding manufacturing companies, where the protection of assets, employees, and operations is paramount. At Dhwani Security Services, we offer specialized security services tailored to meet the unique needs of industrial environments. Our services include on-site security personnel, access control, surveillance systems, and emergency response planning. We understand the complexities of industrial operations and the importance of minimizing disruptions. Our experienced team is trained to handle the specific challenges faced by manufacturing companies, ensuring a safe and secure environment for your business to thrive. Trust us to protect your valuable assets and maintain operational continuity.",
    imgLink: "images/industrialSector.jpg",
};

function IndustrialSector() {
    return (
        <div>
            <TitleBar title={"Industrial Sector"} />
            <RightCard
                title={industrialData.title}
                description={industrialData.description}
                imgLink={industrialData.imgLink}
            />
        </div>
    );
}

export default IndustrialSector;
