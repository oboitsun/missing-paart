import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import SubmitSection from "../components/SubmitSection";
import UpcomingEventSection from "../components/UpcomingEventSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Missing Paart</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <UpcomingEventSection />
        <SubmitSection />
        <Footer />
      </div>
    </div>
  );
}
