import React from "react";
import Banner from "../components/Home/Banner";
import HomeAbout from "../components/Home/HomeAbout";
import Advantages from "../components/Home/Advantages";
import StatsSection from "../components/Home/StatsSection";
import AllService from "../components/Services/AllService";
import AllSectors from "../components/sector/AllSectors";

function Home() {
    return (
        <div>
            <Banner />
            <HomeAbout />
            <AllService />
            <AllSectors />
            <StatsSection />
            <Advantages />
        </div>
    );
}

export default Home;
