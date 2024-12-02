import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">This is a placeholder for the NeoGrid Terms of Service. The actual terms will be added soon.</p>
      <Link href="/" className="text-primary hover:underline">Back to Home</Link>
    </div>
  )
}

