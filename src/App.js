import BestProducts from "./components/BestProducts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import ModernFurniture from "./components/ModernFurniture";
import MyPlayer from "./components/MyPlayer";
import Navbar from "./components/Navbar";
import OnlineCommunity from "./components/OnlineCommunity";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path="/learnmore">
            <LearnMore />
          </Route>

          <Route exact path="/">
            <div>
              <Hero />
            </div>
            <div>
              <BestProducts />
            </div>
            <div>
              <MyPlayer />
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
              <OnlineCommunity />
            </div>
            <div>
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
