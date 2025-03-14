import Link from 'next/link'

export default function Cta() {
  return (
    <div className="bg-yellow-50 px-8 md:px-20 py-20 mt-20 mx-auto max-w-6xl rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/greenhouse-hero.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-gray-900 text-3xl md:text-5xl font-bold leading-tight">
          Transform Clinical Research with Smart Recruitment Solutions
        </h2>
        <p className="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed">
          Join other innovative research partners who've achieved 40% faster enrollment while reducing recruitment costs by 60% using our AI-powered participant matching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/contact" 
             className="inline-flex items-center justify-center bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg 
                    hover:bg-yellow-700 transform hover:-translate-y-0.5 transition-all duration-300">
            Get Your Custom Trial Strategy
          </Link>
          <Link href="/case-studies" 
             className="inline-flex items-center justify-center bg-white text-yellow-600 font-semibold py-3 px-8 rounded-lg 
                    border-2 border-yellow-600 hover:bg-yellow-50 transform hover:-translate-y-0.5 transition-all duration-300">
            View Success Stories
          </Link>
        </div>
        <p className="mt-6 text-gray-500 text-sm">
          Start your recruitment transformation with a free consultation and site analysis
        </p>
      </div>
    </div>
  )
}
