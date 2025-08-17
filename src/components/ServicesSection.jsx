import { Button } from "@/components/ui/button"
import { SERVICES, SERVICES_CONTENT } from "@/constants/servicesConstants"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{SERVICES_CONTENT.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {SERVICES_CONTENT.description}
            </p>
            <div className="space-y-4">
              {SERVICES.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-red-600 hover:bg-red-700" size="lg">
              {SERVICES_CONTENT.buttonText}
            </Button>
          </div>
          <div className="relative">
            <img src={SERVICES_CONTENT.image} alt={SERVICES_CONTENT.imageAlt} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}