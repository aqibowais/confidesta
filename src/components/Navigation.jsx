import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS, NAVIGATION_CONTENT } from "@/constants/navigationConstants"

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">{NAVIGATION_CONTENT.brandName}</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className={`font-medium flex items-center ${
                    item.isActive
                      ? 'text-gray-900 hover:text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">{NAVIGATION_CONTENT.subscribeButtonText}</Button>
        </div>
      </div>
    </nav>
  )
}