import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const PUBLIC_KEY = "Khb3kpeA4oTXUcnG0";
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_jkc945x";
        const templateId = "template_86tm25p";

        emailjs
            .send(serviceId, templateId, {
                to_name: "Dhwani Security Services",
                from_name: formData.name,
                from_phone_number: formData.phone,
                message: formData.message,
                r_email: "dssguards2024@gmail.com",
                reply_to: formData.email,
            })
            .then((response) => {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label
                        htmlFor="phone"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-full">
                <button
                    type="submit"
                    className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
