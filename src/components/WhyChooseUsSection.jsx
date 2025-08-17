import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FEATURES, WHY_CHOOSE_US_CONTENT } from "@/constants/whyChooseUsConstants"
import { fadeInUp, staggerContainer, staggerItem, hoverLift, viewportOptions } from "@/utils/animations"

export default function WhyChooseUsSection() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{WHY_CHOOSE_US_CONTENT.title}</h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverLift}
                data-scroll
                data-scroll-speed="0.1"
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <motion.div
                      className="bg-red-100 p-3 rounded-lg mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-xl font-semibold text-gray-900 mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}