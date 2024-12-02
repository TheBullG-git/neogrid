import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const bots = [
  {
    name: "NeoStaff",
    description: "Empower your moderation team with advanced staff management tools.",
    image: "/images/neostaff.png",
  },
  {
    name: "Neoshield",
    description: "Protect your server from raids and malicious activities with intelligent security.",
    image: "/images/neoshield.png",
  },
  {
    name: "Neo-Desk",
    description: "Streamline user support with an efficient ticket management system.",
    image: "/images/neo-desk.png",
  },
]

export default function Bots() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Bots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bots.map((bot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <img src={bot.image} alt={bot.name} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{bot.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{bot.description}</CardDescription>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

