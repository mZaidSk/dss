import React from "react";
import { Link } from "react-router-dom";

import {
    FaIndustry,
    FaShoppingCart,
    FaBriefcase,
    FaLock,
} from "react-icons/fa";

const sectors = [
    {
        name: "Industrial",
        description: "We provide our services to manufacturing companies.",
        link: "/industrial-sector",
        icon: <FaIndustry className="text-4xl text-blue-500" />, // Updated icon for Industrial sector
    },
    {
        name: "Retail",
        description: "We have a wide range of Retail services available.",
        link: "/retail-sector",
        icon: <FaShoppingCart className="text-4xl text-green-500" />, // Updated icon for Retail sector
    },
    {
        name: "Private Security",
        description:
            "Our services extend to private residences and individual clients.",
        link: "/private-security-sector",
        icon: <FaLock className="text-4xl text-purple-500" />, // Icon for Private Security
    },
    {
        name: "Other Sectors",
        description: "We have lots of other sectors available for services.",
        link: "/other-sector",
        icon: <FaBriefcase className="text-4xl text-red-500" />, // Updated icon for Other Sectors
    },

    // Add more sectors as needed
];

const AllSectors = () => {
    return (
        <section className="text-gray-600 body-font bg-slate-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-semibold title-font mb-4 text-gray-900 tracking-widest">
                        OUR SECTORS
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                        We proudly serve a variety of sectors, including
                        Industrial, Retail, and many more, with customized
                        security solutions to meet your specific needs. Our
                        expertise ensures your business operates safely and
                        efficiently.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {sectors.map((sector, index) => (
                        <Link
                            key={index}
                            to={sector.link}
                            className="p-4 lg:w-1/3 md:w-1/2 w-full"
                        >
                            <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center sm:text-left p-8 border-2 border-gray-200 rounded-md transition-transform duration-300 hover:border-gray-400 hover:shadow-lg hover:translate-y-2">
                                <div className="mb-4 flex justify-center hover:translate-y-2 transition-transform duration-300">
                                    {sector.icon}
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        {sector.name}
                                    </h2>
                                    <p className="mt-2 text-gray-600">
                                        {sector.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllSectors;
