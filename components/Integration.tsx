import { motion } from "framer-motion"

export default function Integration() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Seamless Integration</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src="/images/integration-diagram.svg" alt="Bot Integration" className="w-full max-w-md mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6">
              Our bots are designed to work together seamlessly, providing a comprehensive solution for your Discord server management needs.
            </p>
            <ul className="list-disc list-inside space-y-4">
              <li>NeoStaff manages your moderation team</li>
              <li>Neoshield protects your server from threats</li>
              <li>Neo-Desk handles user support efficiently</li>
            </ul>
            <p className="text-lg mt-6">
              With NeoGrid, you get a fully integrated ecosystem that enhances every aspect of your server operations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

