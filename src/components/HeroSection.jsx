import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { HERO_CONTENT } from "@/constants/heroConstants"
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, buttonHover, viewportOptions } from "@/utils/animations"

export default function HeroSection() {
  return (
    <motion.section
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInLeft}>
            <motion.div variants={staggerItem}>
              <Badge className="bg-red-600 text-white mb-4">{HERO_CONTENT.badge}</Badge>
            </motion.div>
            <motion.h1
              className="text-5xl font-bold mb-6 leading-tight"
              variants={staggerItem}
            >
              {HERO_CONTENT.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={staggerItem}
            >
              {HERO_CONTENT.description}
            </motion.p>
            <motion.div className="flex gap-4" variants={staggerItem}>
              <motion.div whileHover={buttonHover}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Play className="mr-2 h-5 w-5" />
                  {HERO_CONTENT.primaryButtonText}
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  {HERO_CONTENT.secondaryButtonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeInRight}
            data-scroll
            data-scroll-speed="0.5"
          >
            <motion.img
              src={HERO_CONTENT.image}
              alt={HERO_CONTENT.imageAlt}
              className="rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}