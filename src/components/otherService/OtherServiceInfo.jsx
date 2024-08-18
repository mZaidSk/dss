import React from "react";

const otherServiceData = {
    title: "Other Services",
    description: [
        {
            heading: "Production Support Services:",
            content:
                "We provide services for handling, transporting, loading, and unloading items during the manufacturing process.",
        },
        {
            heading: "Warehouse Management Services:",
            content:
                "We provide loading, unloading, and material transferring at warehouses and storage facilities in addition to storage and dispatch services.",
        },
        {
            heading: "Airport Management Services:",
            content:
                "We provide multi-level parking, traffic control, and airport cleaning to private airports.",
        },
    ],
    imgLink: "images/otherService.jpg",
};

function OtherServiceInfo() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        {otherServiceData.title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-6">
                                {otherServiceData.title}
                            </h1>
                        )}
                        {otherServiceData.description && (
                            <div className="space-y-6">
                                {otherServiceData.description.map(
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
                    {otherServiceData.imgLink && (
                        <img
                            alt={otherServiceData.title || "Service Image"}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2 lg:p-12"
                            src={otherServiceData.imgLink}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default OtherServiceInfo;
