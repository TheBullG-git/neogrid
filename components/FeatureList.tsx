'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  "Seamless Connection",
  "AI-Powered Moderation",
  "Cross-Server Syncing",
  "Custom Bot Creation",
  "Advanced Analytics",
  "24/7 Server Monitoring",
  "Automated Backup System",
  "Customizable Command Prefix",
  "Multi-Language Support",
  "Role Management",
  "Event Scheduling",
  "User Engagement Tracking"
]

export default function FeatureList() {
  return (
    <section className="w-full py-20 bg-background" id="all-features">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 neon-text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Check className="text-secondary" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

