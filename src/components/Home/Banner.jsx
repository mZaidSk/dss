import React from "react";
import "./styles/banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen text-white flex items-center justify-center banner-bg"
            style={{
                backgroundImage: `url(images/banner.jpg)`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative text-center px-4 sm:px-6 md:px-12 lg:px-16 w-full sm:w-auto">
                <p className="font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 animate-fadeInUp delay-100">
                    Dhanwi Security Services
                </p>

                {/* This text is hidden on small screens */}
                <h1 className="hidden text-yellow-500 sm:block text-3xl md:text-5xl font-extrabold leading-tight mb-4 animate-typing">
                    Your Trusted Security Partner
                </h1>

                {/* This text is visible only on small screens */}
                <h1 className="block text-yellow-500 sm:hidden text-2xl font-extrabold leading-tight mb-4 animate-typing">
                    Your Trusted
                    <br />
                    Security Partner
                </h1>

                <p className="text-sm sm:text-lg md:text-xl font-light mb-6 animate-fadeInUp delay-300">
                    Comprehensive Solutions for Peace of Mind
                </p>
                <NavLink
                    to="/contact"
                    className="inline-block bg-yellow-500 py-3 px-6 sm:px-8 text-white font-semibold uppercase text-xs sm:text-sm rounded shadow-lg hover:bg-yellow-600 transition-colors duration-300 animate-zoom animate-slideIn"
                >
                    Contact Us
                </NavLink>
            </div>
        </div>
    );
};

export default Banner;
