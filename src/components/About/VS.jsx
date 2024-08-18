import React from "react";
import { FaRocket, FaLightbulb } from "react-icons/fa";

function VS() {
    return (
        <section className="text-gray-600 body-font bg-slate-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col group">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                        <FaRocket className="sm:w-16 sm:h-16 w-10 h-10 transform transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                            VISION
                        </h2>
                        <p className="leading-relaxed text-base">
                            To emerge as the most preferred partner for our
                            valuable customers to secure, maintain, and manage
                            their valuable assets by offering a range of
                            customised solutions through world-class technology
                            and quality-driven and convenient infrastructure
                            management services.
                        </p>
                    </div>
                </div>

                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col group">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                            STRATEGIES
                        </h2>
                        <p className="leading-relaxed text-base">
                            Forming new alliances in order to take advantage of
                            emerging technologies. Make full use of the
                            company's resources to come up with innovative new
                            products and services. Utilise the already
                            established clientele as a springboard for selling
                            additional services to existing customers.
                        </p>
                    </div>
                    <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                        <FaLightbulb className="sm:w-16 sm:h-16 w-10 h-10 transform transition-transform duration-300 group-hover:scale-125" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VS;
