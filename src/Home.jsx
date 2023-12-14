import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/WorkCards/Cards";
import NFTs from "./Components/NFTs/NFTs";
import Pricing from "./Components/Pricing/Pricing";
import Mission from "./Components/Mission/Mission";
import Contact from "./Components/Contact us/Contact";
import Footer from "./Components/Footer/Footer";


function Home() {
  return (
    <div className="home">
     
      <div className="bg">
        <Navbar />
        <Homepage />
      </div>
      <div className="bg2">
      <Hero />
      <Cards/>
      <NFTs/>
      <Pricing/>
      <Mission/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
