import React from "react";
import { NavLink } from "react-router-dom";

const RightCard = ({ title, description, imgLink, buttonText, buttonLink }) => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        {title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-4">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p className="leading-relaxed mb-4">
                                {description}
                            </p>
                        )}

                        {buttonLink && buttonText && (
                            <div className="flex">
                                <NavLink to={buttonLink}>
                                    <button className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                                        {buttonText}
                                    </button>
                                </NavLink>
                            </div>
                        )}
                    </div>
                    {imgLink && (
                        <div className="lg:w-1/2 w-full">
                            <img
                                alt={title || "image"}
                                className="w-full h-64 lg:h-auto object-cover object-center rounded-r-2xl p-2 lg:p-8"
                                src={imgLink}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RightCard;
