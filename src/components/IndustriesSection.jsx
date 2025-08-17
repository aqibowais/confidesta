import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { INDUSTRIES, INDUSTRY_CARDS, INDUSTRIES_CONTENT } from "@/constants/industriesConstants"

export default function IndustriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const cardsPerView = 3
  const maxSlide = Math.max(0, INDUSTRY_CARDS.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {INDUSTRIES_CONTENT.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {INDUSTRIES_CONTENT.description}
          </p>

          {/* Industry Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {INDUSTRIES.map((industry, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                currentSlide === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                currentSlide === maxSlide
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
          >
            {INDUSTRY_CARDS.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-1/3 px-3"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Logo Overlay */}
                    <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md">
                      <span className="text-xs font-bold text-gray-800">
                        {card.logo}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
          >
            {INDUSTRIES_CONTENT.buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}