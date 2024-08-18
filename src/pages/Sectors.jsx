import React from "react";
import TitleBar from "../components/common/TitleBar";
import AllSectors from "../components/sector/AllSectors";

function Sectors() {
    return (
        <div>
            <TitleBar title="Sectors" />
            <AllSectors />
        </div>
    );
}

export default Sectors;
