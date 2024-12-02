import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Discord Server?</h2>
        <p className="text-xl mb-8">Join thousands of servers already using NeoGrid's powerful bot suite.</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

