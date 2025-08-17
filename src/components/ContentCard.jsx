import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { hoverLift } from "@/utils/animations"

export default function ContentCard({ image, alt, category, categoryColor, title, subtitle }) {
  return (
    <motion.div
      whileHover={hoverLift}
      transition={{ duration: 0.3 }}
    >
      <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={alt}
              className="w-full h-48 object-cover rounded-t-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className={`absolute top-3 left-3 ${categoryColor}`}>{category}</Badge>
            </motion.div>
          </div>
          <div className="p-4">
            <motion.h3
              className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}