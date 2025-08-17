import { motion } from "framer-motion"
import { STATS } from "@/constants/statsConstants"
import { staggerContainer, staggerItem, scaleIn, viewportOptions } from "@/utils/animations"

export default function StatsSection() {
  return (
    <motion.section
      className="py-16 bg-gray-900 text-white"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center"
          variants={staggerContainer}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              data-scroll
              data-scroll-speed="0.2"
            >
              <motion.div
                className="text-3xl font-bold text-red-500 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}