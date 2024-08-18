import React from "react";
import RightCard from "../common/RightCard";

function About() {
    const desc = `Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.`;

    return (
        <div>
            <LeftCard description={desc} imgLink={"images/img1.jpg"} />
        </div>
    );
}

export default About;
