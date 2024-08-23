import React from "react";
import LeftCard from "../common/LeftCard";

function HomeAbout() {
    const title = "Dhanwi Security Services";
    const desc = `Welcome to Dhanwi Security Services, a trusted leader in security solutions dedicated to protecting what matters most to you. With years of experience in the industry, we specialize in providing top-tier security services tailored to meet the unique needs of both residential and commercial clients.
`;
    const btnText = "Learn More";

    return (
        <div className="bg-slate-50">
            <LeftCard
                title={title}
                description={desc}
                imgLink={"images/logo-trans.png"}
                buttonText={btnText}
                buttonLink={"/about"}
            />
        </div>
    );
}

export default HomeAbout;
