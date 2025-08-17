import ContentCard from "./ContentCard"
import { FEATURED_ITEMS } from "@/constants/featuredContentConstants"

export default function FeaturedContent() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_ITEMS.map((item, index) => (
            <ContentCard
              key={index}
              image={item.image}
              alt={item.alt}
              category={item.category}
              categoryColor={item.categoryColor}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}