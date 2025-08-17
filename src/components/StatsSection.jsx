import { STATS } from "@/constants/statsConstants"

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          {STATS.map((stat, index) => (
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