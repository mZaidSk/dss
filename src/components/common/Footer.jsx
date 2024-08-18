import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-slate-900">
            <div className="container px-4 md:px-8 py-12 mx-auto flex gap-4 flex-wrap lg:flex-nowrap flex-col lg:flex-row">
                {/* Map Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.389040207182!2d72.89485337505134!3d19.046625282151865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9006eb18315%3A0x32badcc7844207bd!2sDhwani%20Security%20Services!5e0!3m2!1sen!2sin!4v1723920055492!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full rounded-md"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Info & Links Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 lg:gap-8">
                    {/* Address Section */}
                    <div className="w-full ">
                        <div className="h-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-8 border-2 border-gray-200 rounded-md transition-transform duration-300 hover:border-gray-400 hover:shadow-lg hover:translate-y-2">
                            <div className="sm:pl-8">
                                <h2 className="title-font font-medium text-2xl text-white underline decoration-gray-400">
                                    Contact Info
                                </h2>
                                <p className="mt-2 text-white">
                                    Address: Dhwani Security Services, Indira
                                    Nagar, Madhumatti Circle Road, Opp. National
                                    Sarvoday High School, Chembur, Mumbai -
                                    400074
                                </p>
                                <p className="mt-2 text-white">
                                    Email: dssguards2024@gmail.com
                                </p>
                                <p className="mt-2 text-white">
                                    Phone: +91 80970 52740
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Links and Logo Section */}
                    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4">
                        {/* Links Section */}
                        <div className="w-full">
                            <div className="h-full w-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left p-8 border-2 border-gray-200 rounded-md transition-transform duration-300 hover:border-gray-400 hover:shadow-lg hover:translate-y-2">
                                <div className="sm:pl-8">
                                    <h2 className="title-font font-medium text-2xl text-white underline decoration-gray-400">
                                        Links
                                    </h2>
                                    <div className="flex flex-col sm:flex-row gap-10 mt-2 text-stone-300">
                                        <ul>
                                            <li>
                                                <NavLink to={"/"}>Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/about"}>
                                                    About
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/services"}>
                                                    Services
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <NavLink to={"/sectors"}>
                                                    Sectors
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/contact"}>
                                                    Contact us
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo Section */}
                        <div className="w-full h-full  flex justify-center items-center p-2 border-2 border-gray-200 rounded-md transition-transform duration-300 hover:border-gray-400 hover:shadow-lg hover:translate-y-2">
                            <NavLink to={"/"}>
                                <img
                                    src="images/logo-trans.png"
                                    alt="logo"
                                    className="object-contain h-28"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-slate-800 py-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-8">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2024 Dhwani Security Services —
                        <a
                            href="https://twitter.com/DhwaniSecurityServices"
                            rel="noopener noreferrer"
                            className="text-gray-600 ml-1"
                            target="_blank"
                        >
                            @DhwaniSecurityServices
                        </a>
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <a
                            href="mailto:dssguards2024@gmail.com"
                            className="text-gray-500"
                            target="_blank"
                        >
                            <FiMail className="w-5 h-5" />
                        </a>

                        <a
                            href="https://x.com/dhanwi2024?t=A0cslf7OEZNAQ310fP24yA&s=08"
                            target="blank"
                            className="ml-4 text-gray-500"
                        >
                            <FaXTwitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/dhanwi_security_services?utm_source=qr&igsh=MTFmOHUyOHhjM2Rhdg==0"
                            target="blank"
                            className="ml-4 text-gray-500"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
