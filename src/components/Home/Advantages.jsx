import React from "react";

function Advantages() {
    const cardData = [
        {
            title: "Comprehensive Approach",
            description:
                "The Comprehensive Approach focuses on developing systems and cultures that facilitate understanding, collaboration, and communication between states and international organizations on both a horizontal and vertical level.",
        },
        {
            title: "Cost Savings",
            description:
                "The benefits of taking steps to reduce an organization's total asset expenditure, which directly affects its bottom line, are known as savings. Increasing productivity and negotiating cheaper supply purchase prices are two examples of cost-cutting strategies.",
        },
        {
            title: "Real-Time Monitoring & Reporting",
            description:
                "One way to find out what's going on with the queues and channels in a queue manager at any one time is to use real-time monitoring. Since the command was issued, the data that was returned is up to date.",
        },
        {
            title: "Customized Solutions",
            description:
                "At Management Systems, a 'customized solution' consists of the tool (or tools) selected to best suit the client's demands as well as the way these products are packaged and supplied to the client and inside.",
        },
    ];

    return (
        <section className="text-gray-600 body-font bg-slate-50">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
                        Advantages Of DSS
                    </h1>
                </div>
                <div className="flex flex-wrap">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="xl:w-1/4 lg:w-1/2 md:w-full px-4 py-6 flex"
                        >
                            <CardComponent
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const CardComponent = ({ title, description }) => (
    <div className="transition-transform transform hover:scale-105 hover:shadow-lg border-l-2 border-gray-200 border-opacity-60 px-8 py-6 bg-white rounded-lg">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {title}
        </h2>
        <p className="leading-relaxed text-base mb-4">{description}</p>
    </div>
);

export default Advantages;
