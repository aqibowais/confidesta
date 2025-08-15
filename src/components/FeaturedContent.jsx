import ContentCard from "./ContentCard"

export default function FeaturedContent() {
  const featuredItems = [
    {
      image: "/data-presentation.png",
      alt: "Data presentation",
      category: "PSYCHOLOGY",
      categoryColor: "bg-blue-600",
      title: "The AI revolution is underpriced",
      subtitle: "TED Business • 2 days ago"
    },
    {
      image: "/climate-change-coral-reef-underwater.png",
      alt: "Climate change",
      category: "CLIMATE CHANGE",
      categoryColor: "bg-green-600",
      title: "A new lifeline for the world's coral reefs",
      subtitle: "TED Talks • 2 months ago"
    },
    {
      image: "/innovation-culture.png",
      alt: "Business innovation",
      category: "CULTURE",
      categoryColor: "bg-purple-600",
      title: "How to recapture the joy of the early internet",
      subtitle: "TED Talks • 3 days ago"
    },
    {
      image: "/ai-concept.png",
      alt: "AI Technology",
      category: "TECHNOLOGY",
      categoryColor: "bg-orange-600",
      title: "The AI revolution is underpriced",
      subtitle: "TED Business • 1 week ago"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
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