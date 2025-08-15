import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Globe, Users } from "lucide-react"

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Target,
      title: "Custom Solution",
      description: "We deliver custom solutions personalized to your business, addressing unique challenges with precision, scalability, and industry-specific expertise."
    },
    {
      icon: Lightbulb,
      title: "AI-driven Partner",
      description: "We stand as an AI-driven NetSuite Alliance Partner, strategically integrating artificial intelligence into the core business processes of NetSuite."
    },
    {
      icon: Globe,
      title: "A suite of Integrations",
      description: "Take your business to the next level with our pre-built NetSuite integrations. No more data silos and disparate systems! Enjoy rapid implementation with minimal coding."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "We're with you every step of the way, even after implementation. Choose the support model that works best for you - whether it's team-based engagement or flexible hourly plans."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Confidista is your preferred partner?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
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