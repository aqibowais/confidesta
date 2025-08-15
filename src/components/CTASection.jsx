import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Envision a future without limits</h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Join us at Confidista to connect with trailblazers, gain insights from industry leaders, and discover the
          tools to pursue your boldest ambitions. Secure your early supporter pass today.
        </p>
        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8">
          Join us
        </Button>
      </div>
    </section>
  )
}