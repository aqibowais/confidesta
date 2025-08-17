import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS, NAVIGATION_CONTENT } from "@/constants/navigationConstants"
import { fadeInDown, staggerContainer, staggerItem, buttonHover } from "@/utils/animations"

export default function Navigation() {
  return (
    <motion.nav
      className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95"
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center h-16"
          variants={staggerContainer}
        >
          <motion.div className="flex items-center" variants={staggerItem}>
            <motion.h1
              className="text-2xl font-bold text-red-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {NAVIGATION_CONTENT.brandName}
            </motion.h1>
          </motion.div>
          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={staggerContainer}
          >
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={staggerItem}
              >
                <motion.a
                  href={item.href}
                  className={`font-medium flex items-center transition-colors duration-200 ${
                    item.isActive
                      ? 'text-gray-900 hover:text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={staggerItem}>
            <motion.div whileHover={buttonHover}>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                {NAVIGATION_CONTENT.subscribeButtonText}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  )
}