import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, TicketIcon, Zap } from 'lucide-react'

const features = [
  {
    title: "Advanced Security",
    description: "Protect your server from raids and malicious activities with Neoshield.",
    icon: Shield,
  },
  {
    title: "Staff Management",
    description: "Streamline your moderation team's workflow with NeoStaff.",
    icon: Users,
  },
  {
    title: "Ticket System",
    description: "Efficiently manage user inquiries and support with Neo-Desk.",
    icon: TicketIcon,
  },
  {
    title: "Seamless Integration",
    description: "All bots work together for a unified server management experience.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

