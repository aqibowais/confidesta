import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CASE_STUDY_CATEGORIES, DOT_COLORS, CASE_STUDIES, CASE_STUDIES_CONTENT } from "@/constants/caseStudiesConstants"

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("App Dev")
  const [activeCase, setActiveCase] = useState(3) // Start with Colgate as shown in screenshot

  const currentCases = CASE_STUDIES[activeCategory] || CASE_STUDIES["App Dev"]
  const currentCase = currentCases[activeCase] || currentCases[0]

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveCase(0)
  }

  const handleTimelineClick = (index) => {
    setActiveCase(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {CASE_STUDIES_CONTENT.title.split(' ').map((word, index) => (
                index === 0 ? <span key={index}>{word}<br /></span> : word + ' '
              ))}
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              {CASE_STUDIES_CONTENT.subtitle}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 bg-gray-200 p-2 rounded-lg">
            {CASE_STUDY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Timeline Line - extends through all dots and beyond */}
              <div className="absolute left-2 top-0 w-px bg-gray-400" style={{ height: 'calc(100%)' }}></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {currentCases.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className="relative flex items-center cursor-pointer group"
                    onClick={() => handleTimelineClick(index)}
                  >
                    {/* Timeline Dot - positioned to have line go through it */}
                    <div className={`relative w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                      index === activeCase
                        ? `${DOT_COLORS[index]} scale-125 shadow-lg`
                        : DOT_COLORS[index]
                    }`}>
                      {/* Inner dot for active state */}
                      {index === activeCase && (
                        <div className="absolute inset-1 bg-white rounded-full"></div>
                      )}
                    </div>
                    
                    {/* Company Name */}
                    <div className="ml-6">
                      <h3 className={`text-base font-medium transition-colors duration-300 ${
                        index === activeCase
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {caseStudy.company}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discover More Button */}
              <div className="mt-12 ml-10">
                <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-300 text-sm">
                  Discover More
                </button>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={currentCase.image}
                    alt={currentCase.company}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  {/* Logo Overlay */}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentCase.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                    {currentCase.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}