import React from "react";

const psmgServiceData = {
    title: "Private Security and Manned Guarding",
    description: [
        {
            heading: "Overview:",
            content:
                "We offer access control, surveillance, emergency services, patrols, and manned guarding as part of our private security and manned guarding services. We are authorized to conduct business in 12 states and one union territory thanks to our licenses.",
        },
        {
            heading: "Access control:",
            content:
                "We regulate people's mobility within the facility and make sure that only authorized workers are permitted entry.",
        },
        {
            heading: "Surveillance:",
            content:
                "Using CCTV and other surveillance tools, we keep an eye on the building and respond to any events or security breaches.",
        },
        {
            heading: "Patrols:",
            content:
                "We monitor the property on a regular basis to look for and stop any suspicious activities or possible security risks.",
        },
        {
            heading: "Emergency response:",
            content:
                "In the event of a fire, medical emergency, or criminal activity, we offer services.",
        },
    ],
    imgLink: "images/privateService2.jpg",
};

function PsmgServiceInfo() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap lg:w-4/5 mx-auto">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        {psmgServiceData.title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-6">
                                {psmgServiceData.title}
                            </h1>
                        )}
                        {psmgServiceData.description && (
                            <div className="space-y-6">
                                {psmgServiceData.description.map(
                                    (descp, index) => (
                                        <div key={index}>
                                            <p className="font-semibold text-lg text-gray-800 mb-1">
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
                    {psmgServiceData.imgLink && (
                        <img
                            alt={
                                psmgServiceData.title ||
                                "Security Services Image"
                            }
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2 lg:p-12"
                            src={psmgServiceData.imgLink}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default PsmgServiceInfo;
