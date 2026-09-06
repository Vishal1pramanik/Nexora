import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Features from "./Components/Features";
import Product from "./Components/Product";
import HowItWorks from "./Components/HowItWorks";
import Statistics from "./Components/Statistics";
import Solutions from "./Components/Solutions";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import FinalCTA from "./Components/FinalCTA";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="site-shell min-h-screen bg-nexora-bg text-nexora-ink antialiased">
      <Navbar />
      <main id="top">
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
