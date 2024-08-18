import React from "react";

const softServiceData = {
    title: "Soft Service",
    description: [
        {
            heading: "Housekeeping and cleaning services:",
            content:
                "With an emphasis on quality, efficiency, and sustainable service delivery approaches, we provide a broad range of commercial and industrial cleaning services across India.",
        },
        {
            heading: "Landscaping and gardening:",
            content:
                "We are in charge of maintaining the gardens and landscapes at our clients' properties, which includes routine maintenance, planting new gardens, and grass cutting.",
        },
        {
            heading: "Disinfecting and sanitizing services:",
            content:
                "We provide the entire space, including the furnishings, surfaces, and communal areas, a full cleaning and disinfection. To get rid of filth, grime, and bacteria, this usually entails using equipment, disinfectants, and specialty cleaning solutions.",
        },
    ],
    imgLink: "images/softService.jpg",
};

function SoftService() {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-slate-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {softServiceData.imgLink && (
                        <img
                            alt={softServiceData.title || "Service Image"}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2 lg:p-12"
                            src={softServiceData.imgLink}
                        />
                    )}
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {softServiceData.title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-6">
                                {softServiceData.title}
                            </h1>
                        )}
                        {softServiceData.description && (
                            <div className="space-y-6">
                                {softServiceData.description.map(
                                    (descp, index) => (
                                        <div key={index}>
                                            <p className="font-semibold text-lg text-gray-800">
                                                {descp.heading}
                                            </p>
                                            <p className="text-gray-700">
                                                {descp.content}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SoftService;
