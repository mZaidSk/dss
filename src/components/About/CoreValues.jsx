import React from "react";
import {
    FaShieldAlt,
    FaHandshake,
    FaHeart,
    FaBullhorn,
    FaUsers,
} from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";

const values = [
    {
        name: "Reliability",
        desc: `Delivering exceptional service and maintaining a solid reputation for dependability within the industry.`,
        icon: <FaShieldAlt className="w-6 h-6 text-yellow-500" />,
    },
    {
        name: "Integrity",
        desc: `Following a strict ethical code and moral standards. Being transparent and honest in all business interactions.`,
        icon: <FaHandshake className="w-6 h-6 text-yellow-500" />,
    },
    {
        name: "Passion",
        desc: `Demonstrating enthusiasm and a strong dedication to achieving goals. Striving to surpass expectations.`,
        icon: <FaHeart className="w-6 h-6 text-yellow-500" />,
    },
    {
        name: "Persistence",
        desc: `Remaining determined and resilient despite challenges. Continuously working towards improvement and goal attainment.`,
        icon: <FaBullhorn className="w-6 h-6 text-yellow-500" />,
    },
    {
        name: "Precision",
        desc: `Emphasizing accuracy and attention to detail. Consistently delivering high-quality work with a methodical approach.`,
        icon: <TfiTarget className="w-6 h-6 text-yellow-500" />,
    },
    {
        name: "Social Benefit",
        desc: `Maximizing value creation, engaging key stakeholders, and securing funding and contracts.`,
        icon: <FaUsers className="w-6 h-6 text-yellow-500" />,
    },
];

function CoreValues() {
    return (
        <section className="text-gray-600 body-font bg-slate-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold title-font mb-2 text-gray-900">
                        Core Values
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {values.map((value, index) => (
                        <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg h-full flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                        {value.icon}
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                        {value.name}
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
