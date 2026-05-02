import dbConnect from "@/lib/db";

import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ImpactMetrics from "./components/ImpactMetrics";
import VideoService from "./components/VideoService";

import HomepageServices from "./components/HomepageServices/HomepageServices";
import BlogsWrapper from "./components/(Blog)/(homepage)/BlogsWrapper";
import LandingPage from "./components/(Prediction)/PredictorHomepage";

export default function Home() {
  return (
    <>
    <LandingPage />
      <Hero />
      <ImpactMetrics />
      <Projects />
      <HomepageServices />
      <Testimonials />
      <BlogsWrapper />
      {/* <VideoService /> */}
      <Newsletter />
    </>
  );
}
