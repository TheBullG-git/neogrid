import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to NeoGrid</h1>
          <p className="text-xl md:text-2xl mb-8">Elevate Your Discord Experience with Advanced Bot Integration</p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-200">
            Get Started
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/videos/network-background.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

