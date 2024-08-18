import React from "react";

import { useSpring, animated } from "@react-spring/web";

import {
    FaUsers,
    FaBuilding,
    FaUserFriends,
    FaHome,
    FaMapMarkerAlt,
    FaCalendarAlt,
} from "react-icons/fa";
import CardComponent from "./StatsCardSection";

const statsData = [
    {
        icon: <FaUsers className="text-2xl" />,
        title: "2",
        description: "Employees",
    },
    {
        icon: <FaBuilding className="text-2xl" />,
        title: "2",
        description: "Office Employees",
    },
    {
        icon: <FaUserFriends className="text-2xl" />,
        title: "0",
        description: "Clients",
    },
    {
        icon: <FaHome className="text-2xl" />,
        title: "1",
        description: "Branches",
    },
    {
        icon: <FaMapMarkerAlt className="text-2xl" />,
        title: "1",
        description: "Locations",
    },
    {
        icon: <FaCalendarAlt className="text-2xl" />,
        title: "0",
        description: "Total Years",
    },
];

function StatsSection() {
    return (
        <section className="text-gray-600 body-font bg-slate-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
                        Our Work Process
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    {statsData.map((stats) => (
                        <div
                            className="p-4 md:w-1/6 sm:w-1/2 w-1/2"
                            key={stats.description}
                        >
                            <CardComponent
                                icon={stats.icon}
                                title={stats.title}
                                description={stats.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
