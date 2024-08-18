import React from "react";
import { NavLink } from "react-router-dom";

const items = [
    {
        imgSrc: "images/integratedService.jpg",
        title: "Integrated Facility Management Services",
        description:
            "We provide both hard and soft services as part of our integrated service offerings. Soft services include housekeeping, gardening, and landscaping.",
        link: "/ifms-service",
    },
    {
        imgSrc: "images/privateService.jpg",
        title: "Private Security and Manned Guarding",
        description:
            "We offer access control, surveillance, emergency services, patrols, and manned guarding as part of our private security and manned guarding services.",
        link: "/psmg-service",
    },
    {
        imgSrc: "images/otherService.jpg",
        title: "Other Services",
        description:
            "We provide services for handling, transporting, loading, and unloading items during the manufacturing process.",
        link: "/other-service",
    },
];

function AllService() {
    return (
        <section className="text-gray-600 body-font bg-slate-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
                        OUR SERVICES
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        At Dhwani Security Services, our mission is to deliver
                        peace of mind through comprehensive security strategies.
                        We are committed to safeguarding your assets, ensuring
                        the safety of your people, and enhancing your overall
                        security posture.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {items.map((item, index) => (
                        <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                            <NavLink to={item.link}>
                                <div className="flex flex-col h-full relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                                        src={item.imgSrc}
                                    />
                                    <div className="px-8 py-10 lg:py-16 relative z-10 w-full h-full border-4 bg-white transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 hover:shadow-lg flex flex-col ">
                                        <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                                            {item.title}
                                        </h1>
                                        <p className="leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AllService;
