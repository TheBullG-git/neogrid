import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">This is a placeholder for the NeoGrid Privacy Policy. The actual policy will be added soon.</p>
      <Link href="/" className="text-primary hover:underline">Back to Home</Link>
    </div>
  )
}

