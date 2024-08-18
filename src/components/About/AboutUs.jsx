import React from "react";
import RightCard from "../common/RightCard";

const aboutUsData = {
    title: "About Us",
    description: [
        {
            content:
                "Welcome to Dhwani Security Services, a trusted leader in security solutions dedicated to protecting what matters most to you. With years of experience in the industry, we specialize in providing top-tier security services tailored to meet the unique needs of both residential and commercial clients.",
        },
        {
            content:
                "At Dhwani Security Services, we are dedicated to delivering peace of mind through expert security services and cutting-edge technology. Our mission is to safeguard your assets, protect your people, and enhance your overall security posture with customized solutions tailored to your unique needs. We pride ourselves on our integrity, reliability, and customer-focused approach, ensuring that your safety and satisfaction are always our top priorities. With years of experience and a proactive approach to threat management, we stand as your trusted partners in protection. Contact us today to discover how we can help secure your future with superior security solutions.",
        },
    ],
    imgLink: "images/logo-trans.png",
};

function AboutUs() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        {aboutUsData.title && (
                            <h1 className="text-gray-900 text-4xl title-font font-medium mb-6">
                                {aboutUsData.title}
                            </h1>
                        )}
                        {aboutUsData.description && (
                            <div className="space-y-6">
                                {aboutUsData.description.map((descp, index) => (
                                    <div key={index}>
                                        <p className="text-gray-700">
                                            {descp.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {aboutUsData.imgLink && (
                        <img
                            alt={aboutUsData.title || "About us Image"}
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2 lg:p-12"
                            src={aboutUsData.imgLink}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
