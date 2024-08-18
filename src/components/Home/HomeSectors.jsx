import React from "react";
import { FaSchool, FaHospital, FaPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const sectors = [
    {
        name: "Education",
        description:
            "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        link: "",
        icon: <FaSchool className="text-4xl text-blue-500" />,
    },
    {
        name: "Hospital",
        description:
            "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        link: "",
        icon: <FaHospital className="text-4xl text-green-500" />,
    },
    {
        name: "Airport",
        description:
            "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        link: "",
        icon: <FaPlane className="text-4xl text-red-500" />,
    },
    // ... Other sectors
];

const HomeSectors = () => {
    return (
        <section className="text-gray-600 body-font bg-slate-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-semibold title-font mb-4 text-gray-900 tracking-widest">
                        OUR SECTORS
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them.
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

export default HomeSectors;
