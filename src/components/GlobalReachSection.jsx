import React from "react";
import { motion } from "framer-motion";
import { GLOBAL_REACH_CONTENT } from "@/constants/globalReachConstants";
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from "@/utils/animations";

function GlobalReachSection() {
    return (
        <motion.section
            className="container mx-auto px-4 py-12 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
                    variants={staggerItem}
                >
                    {GLOBAL_REACH_CONTENT.title}
                </motion.h2>
                <motion.p
                    className="text-base md:text-lg text-gray-600 mb-6 md:mb-8"
                    variants={staggerItem}
                >
                    {GLOBAL_REACH_CONTENT.subtitle.split('8 Countries')[0]}
                    <span className="text-red-600 font-semibold">8 Countries</span>
                </motion.p>
                <motion.div
                    className="overflow-hidden"
                    variants={staggerItem}
                >
                    <motion.img
                        src={GLOBAL_REACH_CONTENT.imageUrl}
                        alt={GLOBAL_REACH_CONTENT.imageAlt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={GLOBAL_REACH_CONTENT.imageWidth}
                        height={GLOBAL_REACH_CONTENT.imageHeight}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}

export default GlobalReachSection;
