"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LocationUI({ data }) {
  const router = useRouter();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white">
      
      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
        <Image 
          src={data.images[0]} 
          alt={`${data.seo.primaryKeyword} background`} 
          fill 
          priority
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:to-[#0a0a0a]"></div>
        
        <motion.div 
          initial="initial" animate="animate" variants={fadeInUp}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          {/* SEO Optimized Badge */}
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
            {data.seo.secondaryKeywords[1] || `#1 Web Developer in ${data.city}`}
          </span>
          
          {/* Using Primary Keyword in H1 for maximum SEO weight */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            {data.seo.primaryKeyword} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-4xl md:text-6xl">
              Elevating Brands in {data.city}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.heroText} Stop settling for basic templates. Let’s build a high-performance, {data.serviceKeywords[1].toLowerCase()}-optimized site that outranks your competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="px-10 py-4 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95"
            >
              Start Free Consultation
            </button>
            <button 
              onClick={() => window.open(`https://wa.me/7618550475`, '_blank')}
              className="px-10 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              WhatsApp Me
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. LOCAL EXPERTISE SECTION */}
      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }}>
              <h2 className="text-4xl font-bold mb-6">Why Your {data.city} Business Needs a Custom Site</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                The market in <span className="font-bold text-slate-900 dark:text-white">{data.city}</span> is growing fast. Serving areas like {data.nearbyAreas.join(', ')}, we ensure your website isn't just beautiful, but generates leads. {data.clients}
              </p>
              <ul className="space-y-4">
                {['Local SEO Mastery', 'Hyper-Fast Loading', 'Mobile-First Design'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold">
                    <div className="w-6 h-6 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Dynamic Stats Integration */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 relative rounded-3xl overflow-hidden shadow-xl">
                  <Image src={data.images[0]} fill className="object-cover" alt={`${data.city} Local Work`} />
                </div>
                <div className="bg-primary p-6 rounded-3xl text-white">
                  <p className="text-3xl font-bold">{data.stats.completedProjects}+</p>
                  <p className="text-sm opacity-80">Projects Completed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-3xl">
                  <p className="text-3xl font-bold text-primary">{data.stats.yearsExperience}y+</p>
                  <p className="text-sm text-slate-500">Industry Experience</p>
                </div>
                <div className="h-64 relative rounded-3xl overflow-hidden shadow-xl">
                  {/* Ensure you have an og-image or fallback image ready */}
                  <Image src="/og-image.jpg" fill className="object-cover" alt="Shivansh Web Developer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC SERVICE CARDS */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Localized Digital Solutions</h2>
            <p className="text-slate-500">Tailored {data.serviceKeywords.join(', ').toLowerCase()} strategies for {data.city}'s unique economy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CALL-TO-ACTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's dominate the {data.city} search results together.</h2>
          <p className="text-xl mb-10 opacity-90">I'm currently taking on 2 new projects this month.</p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl"
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* 5. FAQ SECTION (Dynamically Mapping SEO Questions) */}
       <section className="py-24 bg-slate-50 dark:bg-[#111]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Answers to AI Search Queries & common questions about web development in {data.city}
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Injecting the exact AI Search Keywords and FAQ Keywords */}
            {[
              {
                question: data.seo.aiSearchKeywords[0] || `Who is the best web developer in ${data.city}?`,
                answer: `We provide custom websites, SEO optimization, ecommerce solutions, and lead-generation websites for businesses throughout ${data.city} and ${data.nearbyAreas[0]}.`
              },
              {
                question: data.faqKeywords[0] || `How much does a website cost in ${data.city}?`,
                answer: `Website pricing depends on features, design quality, and functionality requirements. Contact us for a precise quote tailored to your business in ${data.city}.`
              },
              {
                question: `Do you provide ${data.serviceKeywords[1]} services in ${data.city}?`,
                answer: `Yes, we build SEO-friendly websites designed to rank locally in ${data.city} search results, helping you attract more organic traffic.`
              },
              {
                question: data.seo.secondaryKeywords[1] || `Best web development agency in ${data.city}?`,
                answer: `We pride ourselves on offering bespoke web development tailored to local markets, trusted by ${data.stats.happyClients}+ happy clients.`
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}