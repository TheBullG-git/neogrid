'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Bots', href: '#bots' },
  { name: 'Pricing', href: '#pricing' },
]

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <nav className={`fixed top-4 right-4 z-50 ${scrollPosition > 100 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <motion.button
        className="p-2 bg-background rounded-full shadow-lg neon-border"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
      </motion.button>

      <motion.div
        className="absolute top-14 right-0 bg-background p-4 rounded-lg shadow-lg neon-border"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        initial="closed"
      >
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-2 text-foreground hover:text-secondary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

