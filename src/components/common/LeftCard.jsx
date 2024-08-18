import React from "react";
import { Link } from "react-router-dom";

function LeftCard({ title, description, imgLink, buttonText, buttonLink }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                    {imgLink && (
                        <div className="lg:w-1/2 w-full">
                            <img
                                alt={title || "image"}
                                className="w-full h-64 lg:h-auto object-cover object-center rounded p-2 lg:p-12"
                                src={imgLink}
                            />
                        </div>
                    )}
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-8">
                        {title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p className="leading-relaxed">{description}</p>
                        )}
                        {buttonText && buttonLink && (
                            <Link to={buttonLink}>
                                <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                                    {buttonText}
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeftCard;
