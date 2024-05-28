import BestProducts from "./components/BestProducts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ModernFurniture from "./components/ModernFurniture";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <BestProducts />
      </div>
      <div>
        <ModernFurniture />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
