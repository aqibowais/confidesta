import { ChevronRight,ChevronLeft } from "lucide-react"
import { DISCOVER_CATEGORIES, DISCOVER_CONTENT } from "@/constants/discoverConstants"

export default function DiscoverSection() {

    return (
        <section className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 justify-around">
                    <h2 className="text-2xl font-bold">{DISCOVER_CONTENT.title}</h2>
                    
                    <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
                        <button className="ml-1 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full">
                            <ChevronLeft size={18} />
                        </button>
                        {DISCOVER_CATEGORIES.map((category, index) => (
                            <button 
                                key={index} 
                                className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium ${index === 0 ? 'bg-gray-700' : 'bg-gray-800/80'} hover:bg-gray-700 transition-colors`}
                            >
                                {category}
                            </button>
                        ))}
                        <button className="ml-1 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full">
                            <ChevronRight size={18} />
                        </button>
                        <button className="text-sm text-gray-300 hover:text-white whitespace-nowrap underline">
                            See all
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
