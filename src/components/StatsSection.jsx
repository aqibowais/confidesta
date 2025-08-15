export default function StatsSection() {
  const stats = [
    { value: "1000+", label: "Projects Delivered" },
    { value: "18+", label: "Years of Experience" },
    { value: "50+", label: "Product Integrations" },
    { value: "150+", label: "NetSuite Deliveries" },
    { value: "98%", label: "Successful Go-Live Rate" },
    { value: "1M+", label: "Consulting Hours" }
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}