import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CTA_CONTENT } from "@/constants/ctaConstants"
import { fadeInUp, staggerContainer, staggerItem, buttonHover, viewportOptions } from "@/utils/animations"

export default function CTASection() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          variants={staggerItem}
          data-scroll
          data-scroll-speed="0.2"
        >
          {CTA_CONTENT.title}
        </motion.h2>
        <motion.p
          className="text-xl mb-8 opacity-90 leading-relaxed"
          variants={staggerItem}
        >
          {CTA_CONTENT.description}
        </motion.p>
        <motion.div variants={staggerItem}>
          <motion.div whileHover={buttonHover}>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8"
            >
              {CTA_CONTENT.buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}