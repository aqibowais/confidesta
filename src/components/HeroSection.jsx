import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-red-600 text-white mb-4">FEATURED</Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">The hidden logic of human harmony</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Common knowledge is the secret engine of social life, binding us together in everything from markets to
              international diplomacy. In this fascinating talk, Confidista explores the stories of why autocrats fear
              blank maps, why central bankers monitor and why using the word and not just the word is a revolution.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Play className="mr-2 h-5 w-5" />
                Watch Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/professional-speaker-audience.png"
              alt="Speaker presenting to audience"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}