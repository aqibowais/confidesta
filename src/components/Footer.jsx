import { motion } from "framer-motion"
import { FOOTER_SECTIONS, FOOTER_CONTENT } from "@/constants/footerConstants"
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from "@/utils/animations"

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <motion.h3
              className="text-2xl font-bold text-red-500 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {FOOTER_CONTENT.brandName}
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
          </motion.div>
          {FOOTER_SECTIONS.map((section, index) => (
            <motion.div key={index} variants={staggerItem}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          variants={fadeInUp}
        >
          <p>{FOOTER_CONTENT.copyright}</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
