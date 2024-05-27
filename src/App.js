import BestProducts from "./components/BestProducts";
import Hero from "./components/Hero";
import ModernFurniture from "./components/ModernFurniture";
import Navbar from "./components/Navbar";


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
    </div>
  );
}

export default App;
