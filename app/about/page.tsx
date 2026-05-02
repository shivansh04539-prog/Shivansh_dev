"use client";

import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBriefcase,
  FaProjectDiagram,
  FaUserCheck,
  FaGraduationCap,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 overflow-hidden">
      {/* 1. HERO SECTION WITH GRADIENT */}
      <motion.div className="text-center mb-16" {...fadeInDown}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Transforming Ideas into Digital Reality in Saharanpur & Beyond.
        </p>
        {/* INSTAGRAM BUTTON */}
      {/* INSTAGRAM BUTTON */}
        <motion.a
          href="https://www.instagram.com/shivanshdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-sm md:text-base font-bold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
        >
          <FaInstagram className="text-2xl md:text-3xl" />
          <span>Follow my Dev Journey</span>
        </motion.a>
      </motion.div>

      {/* 2. STATS BAR (NEW! - Builds Instant Trust) */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl text-center border border-blue-100 dark:border-blue-800"
        >
          <FaBriefcase className="text-3xl text-blue-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          2+
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Years Experience
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl text-center border border-purple-100 dark:border-purple-800"
        >
          <FaProjectDiagram className="text-3xl text-purple-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            80+
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Projects Delivered
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="hidden md:block bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl text-center border border-green-100 dark:border-green-800"
        >
          <FaUserCheck className="text-3xl text-green-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            100%
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Client Satisfaction
          </p>
        </motion.div>
      </motion.div>

      {/* 3. BIO SECTION - Clean & Professional */}
      <motion.section className="mb-20" {...fadeInUp}>
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-5xl mx-auto text-center relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed font-light">
            I create high-performing websites that don’t just look good - they{" "}
            <strong className="font-bold text-blue-600">generate leads,  </strong>{" "}
            sales, and{" "}
            <strong className="font-bold text-green-600">
              real business growth.
            </strong>
            .
            <br />
            <br />
            From building the digital infrastructure for Saharanpur’s well-established coaching institutes with over 20 years of trust,
            <strong className="text-gray-900 dark:text-white font-bold bg-yellow-100 dark:bg-yellow-900/30 px-2 rounded-md mx-1">
               ABC Institute & Rapti Institute
            </strong>
            , to helping local startups scale, I focus on delivering websites
            that are fast, secure, and profitable.
          </p>
        </div>
      </motion.section>

      {/* 4. EXPERTISE CARDS - With Better Styling */}
      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          {...fadeInUp}
        >
          My Technical Expertise
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Card 1 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaCode className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Frontend & Design</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              I build mobile-first interfaces that keep users engaged and
              convert visitors into buyers.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                React.js / Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                Framer Motion
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaLaptopCode className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Backend & Security</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              Robust systems to handle student data, secure logins, and online
              payments.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                Node.js & Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                MongoDB Database
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                Secure Auth
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500 hover:shadow-2xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaRocket className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Growth Tools</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              Ensuring your website ranks high on Google and runs fast 24/7.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> SEO
                Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>{" "}
                Cloud Hosting (AWS)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>{" "}
                Analytics
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 5. EXPERIENCE - Timeline Style */}
      <motion.section className="mb-20" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          {...fadeInUp}
        >
          Professional Journey
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Exp 1 */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 group-hover:w-3 transition-all"></div>
            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Lead Web Developer
                </h3>
                <p className="text-blue-600 font-bold text-lg">
                  ABC & Rapti Institute (Saharanpur)
                </p>
              </div>
              <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                2025 - Present
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              "Managed the digital transformation for Saharanpur&apos;s largest
              coaching institute."
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                ✅ Handle 1000+ Student Inquiries
              </li>
              <li className="flex items-start gap-2">
                ✅ Secure Student Database
              </li>
              <li className="flex items-start gap-2">✅ Mobile-First Design</li>
              <li className="flex items-start gap-2">✅ Fast Page Loading</li>
            </ul>
          </motion.div>

          {/* Exp 2 */}
          <motion.div
            className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="absolute left-0 top-0 h-full w-2 bg-green-500 group-hover:w-3 transition-all"></div>
            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Freelance Developer
                </h3>
                <p className="text-green-600 font-bold text-lg">
                  Self-Employed / Remote
                </p>
              </div>
              <span className="bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">
                2020 - 2023
              </span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                • Delivered{" "}
                <strong className="text-gray-900 dark:text-white">
                  15+ custom web projects
                </strong>{" "}
                for small businesses.
              </li>
              <li>
                • Integrated secure payment gateways (Razorpay/Stripe) for
                e-commerce clients.
              </li>
              <li>
                • Helped local shops rank on Google Maps via SEO best practices.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 6. EDUCATION - Minimal & Clean */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="inline-block p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4"
            whileHover={{ rotate: 10 }}
          >
            <FaGraduationCap className="text-4xl text-gray-700 dark:text-gray-300" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">
          Self-Taught Full Stack Developer
          </h2>
          <p className="text-primary font-medium text-lg">
            J.V Jain College, Saharanpur • 2024
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Graduated with Honors • Web Tech Specialist
          </p>
        </div>
      </motion.section>
    </div>
  );
}
