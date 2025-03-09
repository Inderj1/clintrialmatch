export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#00509d]/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto rounded-2xl p-12 bg-white/50 backdrop-blur-sm shadow-sm">
            <h1 className="text-4xl md:text-6xl font-bold text-[#3d5a80] mb-6">
              AI-Powered Oncology Clinical Trial Platform
            </h1>
            <p className="text-xl text-[#3d5a80] mb-10">
              In the complex landscape of clinical trials, oncology presents unique challenges that demand specialized solutions. Our AI-powered platform is purpose-built for oncology, addressing the specific complexities of cancer clinical trials with precision and expertise.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#00509d] text-white px-8 py-3 rounded-lg hover:bg-[#00509d]/90 transition">
                View a Demo
              </button>
              <button className="border-2 border-[#00509d] text-[#00509d] px-8 py-3 rounded-lg hover:bg-[#00509d]/10 transition">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#3d5a80]">
            Specialized Oncology Trial Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Precision-Driven Patient Matching */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Precision-Driven Patient Matching</h3>
              <p className="text-[#3d5a80]">Advanced AI engine trained on oncology biomarkers and clinical criteria for accurate patient-trial matching at scale.</p>
            </div>

            {/* Intelligent Retention Management */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Intelligent Retention Management</h3>
              <p className="text-[#3d5a80]">Predictive analytics and automated engagement tools to maintain patient participation throughout the trial.</p>
            </div>

            {/* Advanced Genomic Analysis */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Advanced Genomic Analysis</h3>
              <p className="text-[#3d5a80]">Comprehensive analysis of NGS data and molecular testing results with automated interpretation of complex biomarker profiles.</p>
            </div>

            {/* Site Management */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Site Management</h3>
              <p className="text-[#3d5a80]">Real-time monitoring of site activation, enrollment metrics, and performance analytics for optimal trial execution.</p>
            </div>

            {/* Data Integration */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Data Integration & Analytics</h3>
              <p className="text-[#3d5a80]">Seamless integration with EHR systems and advanced analytics for comprehensive trial performance monitoring.</p>
            </div>

            {/* Protocol Optimization */}
            <div className="p-6 rounded-xl">
              <div className="w-16 h-16 bg-[#00509d]/10 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#00509d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3d5a80]">Protocol Optimization</h3>
              <p className="text-[#3d5a80]">AI-driven protocol design recommendations based on real-world data and historical performance analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#3d5a80]">
            Transforming Oncology Clinical Trials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-[#3d5a80] mb-4">75%</div>
              <p className="text-[#3d5a80] mb-4">Faster patient enrollment rates</p>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-[#3d5a80] mb-4">92%</div>
              <p className="text-[#3d5a80] mb-4">Patient retention improvement</p>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-[#3d5a80] mb-4">60%</div>
              <p className="text-[#3d5a80] mb-4">Reduction in site activation time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#00509d] text-white rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to revolutionize your oncology trials?</h2>
            <p className="text-xl mb-8">Experience the power of our specialized oncology clinical trial platform.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-[#00509d] px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Watch a Demo
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-[#00509d]/90 transition">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
    </section>
  </div>
  );
}
