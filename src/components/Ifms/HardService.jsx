import React from "react";

const hardServiceData = {
    title: "Hard Services",
    description: [
        {
            heading: "Pest control:",
            content:
                "We provide commercial establishments with pest control services by utilizing treatments and solutions approved by the government, adhering to industry best practices and environmental, health, and safety standards.",
        },
        {
            heading: "Facade cleaning:",
            content:
                "For our clients' properties, we provide exterior glass facade cleaning and maintenance services.",
        },
        {
            heading: "Mechanical, electrical, and plumbing services:",
            content:
                "For retail stores and other locations, we offer mechanical, electrical, and plumbing maintenance services. These services include routine maintenance on HVAC equipment, energy consumption monitoring, and the cleaning and replacement of air filters as well as the inspection and testing of fire prevention systems.",
        },
        {
            heading: "Solid, Liquid, and Biomedical Waste Management:",
            content:
                "Our waste management services cover the entire process, starting with the collection of solid and biomedical waste from various locations like offices, restrooms, kitchens, and public areas. This waste is then transported to designated disposal sites, treated to mitigate environmental impact, and finally disposed of or discharged based on its type. Additionally, we provide effluent treatment services, which involve designing, constructing, and commissioning common effluent treatment plants, as well as upgrading and expanding existing facilities. We deliver thorough liquid waste management solutions that include the supervised engineering and construction of these plants, along with ancillary services such as security and pest control on-site. We also implement stringent quality control measures, including regular sampling and testing through accredited laboratories. Furthermore, we offer operation and maintenance services for these treatment plants.",
        },
    ],
    imgLink: "images/hardService.jpg",
};

function HardService() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {hardServiceData.imgLink && (
                        <img
                            alt={hardServiceData.title || "Service Image"}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2 lg:p-12"
                            src={hardServiceData.imgLink}
                        />
                    )}
                    <div className="flex flex-col gap-8 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {hardServiceData.title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-4">
                                {hardServiceData.title}
                            </h1>
                        )}
                        {hardServiceData.description && (
                            <div className="leading-relaxed space-y-6">
                                {hardServiceData.description.map(
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

export default HardService;
