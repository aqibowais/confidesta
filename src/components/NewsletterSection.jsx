import { motion } from "framer-motion"
import { NEWSLETTERS, NEWSLETTER_CONTENT } from "@/constants/newsletterConstants"
import { fadeInUp, staggerContainer, staggerItem, hoverLift, viewportOptions } from "@/utils/animations"

export default function NewsletterSection() {
  return (
    <motion.section
      className="bg-gray-900 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Newsletter Cards - 4 columns */}
          <motion.div className="lg:col-span-4" variants={staggerContainer}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {NEWSLETTERS.map((newsletter) => (
                <motion.div
                  key={newsletter.id}
                  className="relative"
                  variants={staggerItem}
                  whileHover={hoverLift}
                >
                  {/* Frequency Badge */}
                  <div className="mb-3">
                    <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded">
                      {newsletter.frequency}
                    </span>
                  </div>
                  
                  {/* Newsletter Card */}
                  <div 
                    className={`${newsletter.bgColor} ${newsletter.border || ''} rounded-lg p-6 h-48 flex flex-col justify-center items-center text-center relative overflow-hidden mb-4`}
                  >
                    {/* TED Logo/Title */}
                    <div className={`${newsletter.textColor} mb-3`}>
                      <h3 className="font-bold">
                        {newsletter.title === "TED TALKS DAILY" ? (
                          <>
                            <div className="text-red-500 text-2xl font-bold">TED</div>
                            <div className="text-black text-lg font-bold">TALKS</div>
                            <div className="text-black text-lg font-bold">DAILY</div>
                          </>
                        ) : newsletter.title === "TED Recommends" ? (
                          <>
                            <div className="text-white text-3xl font-bold">TED</div>
                            <div className="text-white text-sm font-normal">Recommends</div>
                          </>
                        ) : newsletter.title === "TED-Ed" ? (
                          <>
                            <div className="text-white text-3xl font-bold">
                              TED<span className="text-2xl">Ed</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-gray-600 text-sm">TED Talks</div>
                            <div className="text-black text-3xl font-bold">TECH</div>
                          </>
                        )}
                      </h3>
                    </div>
                    
                    {/* Background decoration for TED-Ed */}
                    {newsletter.title === "TED-Ed" && (
                      <div className="absolute bottom-4 right-4 opacity-30">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-white/40 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Company Name */}
                  <div className="mb-3">
                    <h4 className={`${newsletter.textColor === "text-white" ? "text-white" : "text-white"} font-semibold text-sm`}>
                      {newsletter.title === "TED TALKS DAILY" ? "TED Talks Daily" : 
                       newsletter.title === "TED Recommends" ? "TED Recommends" :
                       newsletter.title === "TED-Ed" ? "TED-Ed" : "TED Tech"}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {newsletter.subtitle}
                    </p>
                  </div>
                  
                  {/* Select Button */}
                  <motion.button
                    className="w-full bg-white text-black font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {NEWSLETTER_CONTENT.selectButtonText}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Newsletter Signup - 1 column */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <div className="text-white">
              <motion.h2
                className="text-2xl font-bold mb-3"
                variants={staggerItem}
              >
                {NEWSLETTER_CONTENT.title}
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-6 text-sm"
                variants={staggerItem}
              >
                {NEWSLETTER_CONTENT.description}
              </motion.p>
              
              {/* Email Signup Form */}
              <motion.div className="space-y-4" variants={staggerContainer}>
                <motion.div variants={staggerItem}>
                  <input
                    type="email"
                    placeholder={NEWSLETTER_CONTENT.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </motion.div>
                
                <motion.button
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {NEWSLETTER_CONTENT.subscribeButtonText}
                </motion.button>
                
                <motion.p
                  className="text-xs text-gray-400 mt-4"
                  variants={staggerItem}
                >
                  {NEWSLETTER_CONTENT.privacyText}{" "}
                  <a href={NEWSLETTER_CONTENT.privacyLinkHref} className="text-white underline hover:no-underline">
                    {NEWSLETTER_CONTENT.privacyLinkText}
                  </a>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
