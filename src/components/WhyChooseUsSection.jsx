import { Card } from "@/components/ui/card"
import { FEATURES, WHY_CHOOSE_US_CONTENT } from "@/constants/whyChooseUsConstants"

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{WHY_CHOOSE_US_CONTENT.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}