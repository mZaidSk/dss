import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const CardComponent = ({ icon, title, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once when in view
        threshold: 0.1, // Adjust this value to change when the animation should start
    });

    // Convert title to a number
    const number = parseInt(title, 10);

    // Animation for the number
    const props = useSpring({
        from: { number: 0 },
        to: { number: inView ? number : 0 },
        config: { duration: 1000 }, // Adjust duration as needed
    });

    return (
        <div
            ref={ref}
            className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out text-center"
        >
            <div className="flex justify-center items-center text-yellow-500 mb-3">
                <div className="text-4xl">{icon}</div>
            </div>
            <h2 className="title-font font-medium text-3xl text-gray-900">
                <animated.div>
                    {props.number.to((n) => `${Math.floor(n)}`)}
                </animated.div>
            </h2>
            <p className="leading-relaxed">{description}</p>
        </div>
    );
};

export default CardComponent;
