import Link from 'next/link'
import Image from 'next/image'

export default function MobileApp() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/health-heart.jpg')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - iPhone Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] rounded-[3rem] p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#FFB5A0] rounded-full opacity-50 blur-3xl -z-10 transform scale-150 animate-pulse"></div>
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image 
                  src="/health-heart.jpg" 
                  alt="Mobile App Interface"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col items-start lg:pl-12">
            <span className="text-[#FFB5A0] font-semibold mb-4">ACCELERATE YOUR TRIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Struggling to meet enrollment targets and timelines?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Powered by our signature <span className="font-semibold text-gray-900">TrialMatch™ Engine</span>, we make it easy for your sites to recruit qualified participants from your digital outreach platform, 24/7, all year round - just like the biggest research organizations in the world.
            </p>
            <Link href="/demo" 
              className="bg-gradient-to-r from-[#FFB5A0] to-[#ff9c80] text-white px-10 py-4 rounded-lg hover:shadow-xl transition-all duration-300 text-lg font-medium transform hover:-translate-y-1">
              BOOK A DEMO
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto px-6 mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Testimonials
            </h3>
            <p className="text-lg text-gray-600">See what our clients are saying about their experience with us.</p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FFB5A0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Dr. Sarah Mitchell</h4>
                  <p className="text-gray-600 text-sm">Dermatology Clinic</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"Merix has transformed how we engage with patients. The mobile app has significantly boosted our membership sales."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FFB5A0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Dr. Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Wellness Center</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"The patient engagement features have helped us maintain stronger relationships with our clients. Highly recommended!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
