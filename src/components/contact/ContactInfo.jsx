import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

function ContactInfo() {
    return (
        <div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <div className="mb-8">
                    <h2 className="text-xl font-medium text-gray-900">
                        Contact Information
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center mt-4">
                        {/* Person 1 */}
                        <div className="md:w-1/2 p-4">
                            <div className="bg-white text-left shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                                <div className="p-8">
                                    <p className="text-gray-600 mt-2 font-medium">
                                        Name: Niranjan
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Phone: (+91) 8097052740
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Email: mirdhan364@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Person 2 */}
                        <div className="md:w-1/2 p-4">
                            <div className="bg-white text-left shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                                <div className="p-8">
                                    <p className="text-gray-600 mt-2 font-medium">
                                        Name: Ankit kumar
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Phone: (+91) 9004386933
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        Email: kurmiankitkumar12@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="leading-normal my-5">
                    Dhanwi Security Services, Indira nagar, Madhumatti Circle
                    Road, Opp. National Sarvoday High School,
                    Chembur, Mumbai - 400074
                </p>
                <span className="inline-flex">
                    <a
                        href="mailto:dssguards2024@gmail.com"
                        className="text-gray-500"
                        target="_blank"
                    >
                        <FiMail className="w-5 h-5" />
                    </a>

                    <a
                        href="https://x.com/dhanwi2024?t=A0cslf7OEZNAQ310fP24yA&s=08"
                        target="blank"
                        className="ml-4 text-gray-500"
                    >
                        <FaXTwitter className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/dhanwi_security_services?utm_source=qr&igsh=MTFmOHUyOHhjM2Rhdg==0"
                        target="blank"
                        className="ml-4 text-gray-500"
                    >
                        <FaInstagram className="w-5 h-5" />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default ContactInfo;
