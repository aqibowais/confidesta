import { motion } from "framer-motion"
import { ChevronRight,ChevronLeft } from "lucide-react"
import { DISCOVER_CATEGORIES, DISCOVER_CONTENT } from "@/constants/discoverConstants"
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from "@/utils/animations"

export default function DiscoverSection() {
    return (
        <motion.section
            className="bg-black text-white py-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 justify-around">
                    <motion.h2
                        className="text-2xl font-bold"
                        variants={staggerItem}
                    >
                        {DISCOVER_CONTENT.title}
                    </motion.h2>
                    
                    <motion.div
                        className="flex items-center space-x-2 overflow-x-auto scrollbar-hide"
                        variants={staggerContainer}
                    >
                        <motion.button
                            className="ml-1 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                            variants={staggerItem}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft size={18} />
                        </motion.button>
                        {DISCOVER_CATEGORIES.map((category, index) => (
                            <motion.button
                                key={index}
                                className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium ${index === 0 ? 'bg-gray-700' : 'bg-gray-800/80'} hover:bg-gray-700 transition-colors`}
                                variants={staggerItem}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                        <motion.button
                            className="ml-1 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                            variants={staggerItem}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight size={18} />
                        </motion.button>
                        <motion.button
                            className="text-sm text-gray-300 hover:text-white whitespace-nowrap underline"
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                        >
                            See all
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
