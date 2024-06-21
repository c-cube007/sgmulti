import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div>
      <AudioPlayer />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        {/* <FeatureSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
