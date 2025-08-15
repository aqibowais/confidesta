import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ContentCard({ image, alt, category, categoryColor, title, subtitle }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={alt}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className={`absolute top-3 left-3 ${categoryColor}`}>{category}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  )
}