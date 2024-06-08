// import BestProducts from "./components/BestProducts";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import LearnMore from "./components/LearnMore";
// import ModernFurniture from "./components/ModernFurniture";
// import MyPlayer from "./components/MyPlayer";
// import Navbar from "./components/Navbar";
// import OnlineCommunity from "./components/OnlineCommunity";
// import Testimonials from "./components/Testimonials";
// import WhyChooseUs from "./components/WhyChooseUs";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LivingRoom from "./components/info/LivingRoom";
// import CollabRoom from "./components/info/CollabRoom";
// import MasterRoom from "./components/info/MasterRoom";


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div>
//           <Navbar />
//         </div>
//         <Switch>
//           <Route path="/learnmore">
//             <LearnMore />
//           </Route>
//           <Route path="/livingroom">
//             <LivingRoom />
//           </Route>
//           <Route path="/collabroom">
//             <CollabRoom />
//           </Route>
//           <Route path="/masterroom">
//             <MasterRoom />
//           </Route>
//           <Route exact path="/">
//             <div>
//               <Hero />
//             </div>
//             <div>
//               <BestProducts />
//             </div>
//             <div>
//               <MyPlayer />
//             </div>
//             <div>
//               <ModernFurniture />
//             </div>
//             <div>
//               <WhyChooseUs />
//             </div>
//             <div>
//               <Testimonials />
//             </div>
//             <div>
//               <OnlineCommunity />
//             </div>
//             <div>
//               <Footer />
//             </div>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LearnMore from "./components/LearnMore";
import LivingRoom from "./components/info/LivingRoom";
import CollabRoom from "./components/info/CollabRoom";
import MasterRoom from "./components/info/MasterRoom";
import Hero from "./components/Hero";
import BestProducts from "./components/BestProducts";
import MyPlayer from "./components/MyPlayer";
import ModernFurniture from "./components/ModernFurniture";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import OnlineCommunity from "./components/OnlineCommunity";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
// import ItemDetail from "./components/ItemDetail"; // Create this component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/learnmore">
            <LearnMore />
          </Route>
          <Route path="/livingroom">
            <LivingRoom />
          </Route>
          <Route path="/collabroom">
            <CollabRoom />
          </Route>
          <Route path="/masterroom">
            <MasterRoom />
          </Route>
          {/* <Route path="/item/:id">
            <ItemDetail />
          </Route> */}
          <Route path="/cartpage">
            <CartPage />
          </Route>
          <Route exact path="/">
            <Hero />
            <BestProducts />
            <MyPlayer />
            <ModernFurniture />
            <WhyChooseUs />
            <Testimonials />
            <OnlineCommunity />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
