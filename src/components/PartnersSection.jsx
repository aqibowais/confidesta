import { useRef } from "react"
import { motion } from "framer-motion"
import { PARTNERS, AWARDS, PARTNERS_CONTENT } from "@/constants/partnersConstants"
import { fadeInUp, viewportOptions } from "@/utils/animations"

export default function PartnersSection() {
    const partnersRef = useRef(null)
    const awardsRef = useRef(null)

    return (
        <motion.section
            className="py-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUp}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-6" variants={fadeInUp}>
                    <h2 className="text-xl font-bold text-gray-900">{PARTNERS_CONTENT.partnersTitle}</h2>
                </motion.div>
                <div className="relative overflow-hidden whitespace-nowrap">
                    <div className="absolute left-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute right-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
                    <div className="flex justify-center">
                        <div ref={partnersRef} className="inline-block animate-marquee-left">
                            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                                <div key={index} className="inline-block mx-4">
                                    <img src={partner.logo} alt={partner.name} className="h-12 opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <motion.div className="text-center mt-6 mb-6" variants={fadeInUp}>
                    <h2 className="text-xl font-bold text-gray-900">{PARTNERS_CONTENT.awardsTitle}</h2>
                </motion.div>
                <div className="relative overflow-hidden whitespace-nowrap">
                    <div className="absolute left-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute right-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
                    <div className="flex justify-center">
                        <div ref={awardsRef} className="inline-block animate-marquee-right">
                            {[...AWARDS, ...AWARDS, ...AWARDS].map((award, index) => (
                                <div key={index} className="inline-block mx-4">
                                    <img src={award.logo} alt={award.name} className="h-12 opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(calc(-100% / 3)); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 15s linear infinite;
                    width: fit-content;
                }
                .animate-marquee-right {
                    animation: marquee-right 15s linear infinite;
                    width: fit-content;
                }
            `}</style>
        </motion.section>
    )
}