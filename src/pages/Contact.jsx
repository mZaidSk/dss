import React from "react";
import TitleBar from "../components/common/TitleBar";

import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
    return (
        <div>
            <TitleBar title={"Contact Us"} />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-2xl md:text-4xl font-semibold title-font mb-4 text-gray-900">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Need any help!
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
