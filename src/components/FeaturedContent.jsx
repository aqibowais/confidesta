import { motion } from "framer-motion"
import ContentCard from "./ContentCard"
import { FEATURED_ITEMS } from "@/constants/featuredContentConstants"
import { staggerContainer, staggerItem, viewportOptions } from "@/utils/animations"

export default function FeaturedContent() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      data-scroll-section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {FEATURED_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              data-scroll
              data-scroll-speed="0.3"
            >
              <ContentCard
                image={item.image}
                alt={item.alt}
                category={item.category}
                categoryColor={item.categoryColor}
                title={item.title}
                subtitle={item.subtitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}