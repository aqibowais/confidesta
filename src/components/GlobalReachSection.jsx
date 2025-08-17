import React from "react";
import { GLOBAL_REACH_CONTENT } from "@/constants/globalReachConstants";

function GlobalReachSection() {
    return (
        <section className="container mx-auto px-4 py-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                    {GLOBAL_REACH_CONTENT.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                    {GLOBAL_REACH_CONTENT.subtitle.split('8 Countries')[0]}
                    <span className="text-red-600 font-semibold">8 Countries</span>
                </p>
                <div className="overflow-hidden">
                    <img
                        src={GLOBAL_REACH_CONTENT.imageUrl}
                        alt={GLOBAL_REACH_CONTENT.imageAlt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={GLOBAL_REACH_CONTENT.imageWidth}
                        height={GLOBAL_REACH_CONTENT.imageHeight}
                    />
                </div>
            </div>
        </section>
    );
}

export default GlobalReachSection;
