import React from "react";

function TitleBar({ title }) {
    return (
        <section className="text-gray-600 body-font bg-slate-800">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap ml-0 m:ml-6 lg:ml-24">
                    <div className="lg:w-1/2 mb-6 lg:mb-0 group">
                        <h1 className="text-2xl md:text-4xl font-semibold title-font mb-2 text-white">
                            {title}
                        </h1>
                        <div className="relative">
                            <div className="h-1 w-20 bg-yellow-500 rounded transition-all duration-300 ease-in-out group-hover:w-32"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TitleBar;
