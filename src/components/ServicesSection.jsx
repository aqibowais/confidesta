import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SERVICES, SERVICES_CONTENT } from "@/constants/servicesConstants"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, buttonHover, viewportOptions } from "@/utils/animations"

export default function ServicesSection() {
  return (
    <motion.section
      className="py-20 bg-white"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft}>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              variants={staggerItem}
            >
              {SERVICES_CONTENT.title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={staggerItem}
            >
              {SERVICES_CONTENT.description}
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={staggerItem}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-red-600 rounded-full mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.div whileHover={buttonHover}>
                <Button className="mt-8 bg-red-600 hover:bg-red-700" size="lg">
                  {SERVICES_CONTENT.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeInRight}
            data-scroll
            data-scroll-speed="0.3"
          >
            <motion.img
              src={SERVICES_CONTENT.image}
              alt={SERVICES_CONTENT.imageAlt}
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}