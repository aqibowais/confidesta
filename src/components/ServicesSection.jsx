import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    "Custom Software Development",
    "AI-Powered Solutions",
    "Digital Transformation"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Helping you build</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dedicated to building cutting-edge custom digital solutions and software products. With our expertise,
              creativity, and commitment, we turn your ideas into reality.
            </p>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-red-600 hover:bg-red-700" size="lg">
              Get Started
            </Button>
          </div>
          <div className="relative">
            <img src="/modern-laptop-mobile-app.png" alt="Digital solutions showcase" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}