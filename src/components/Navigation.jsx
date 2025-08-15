import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">Confidista</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-600 font-medium">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                About 
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                Discover 
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                Participate 
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                Partner 
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium flex items-center">
                Programs
              </a>
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
        </div>
      </div>
    </nav>
  )
}