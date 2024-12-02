import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">NeoGrid</h3>
            <p>Empowering Discord communities with advanced bot integration.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Home</a></li>
              <li><a href="#" className="hover:text-purple-400">Features</a></li>
              <li><a href="#" className="hover:text-purple-400">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400">Support</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook /></a>
              <a href="#" className="hover:text-purple-400"><Twitter /></a>
              <a href="#" className="hover:text-purple-400"><Instagram /></a>
              <a href="#" className="hover:text-purple-400"><Github /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 NeoGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

