import React from "react";

// this file is not in use right now

const HomeService = () => {
    const items = [
        {
            imgSrc: "https://dummyimage.com/600x360",
            subtitle: "THE SUBTITLE",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
        {
            imgSrc: "https://dummyimage.com/601x361",
            subtitle: "THE SUBTITLE",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
        {
            imgSrc: "https://dummyimage.com/603x363",
            subtitle: "THE SUBTITLE",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
        {
            imgSrc: "https://dummyimage.com/602x362",
            subtitle: "THE SUBTITLE",
            title: "Neptune",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
        {
            imgSrc: "https://dummyimage.com/605x365",
            subtitle: "THE SUBTITLE",
            title: "Holden Caulfield",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
        {
            imgSrc: "https://dummyimage.com/606x366",
            subtitle: "THE SUBTITLE",
            title: "Alper Kamu",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        },
    ];

    return (
        <section className="text-gray-600 body-font bg-slate-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
                        OUR SERVICES
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them man bun deep
                        jianbing selfies heirloom.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {items.map((item, index) => (
                        <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
                                    src={item.imgSrc}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 bg-white transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 hover:shadow-lg">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                                        {item.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {item.title}
                                    </h1>
                                    <p className="leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeService;

// heppy ending
