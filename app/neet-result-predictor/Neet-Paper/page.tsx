import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen text-black flex items-center justify-center  text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">
          Get Instant Paper Leak 
        </h1>

        <p className="text-lg text-gray-300 mb-4">
          When the paper is leaked or officially released, it will be
          automatically sent to your WhatsApp number instantly. Give your correct number
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Also try our Astrology Result Predictor to estimate how many marks
          you may score according to your prediction details.
        </p>

        <Link href="/neet-result-predictor/quiz/vedic">
          <button className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-lg">
            Try Prediction Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;