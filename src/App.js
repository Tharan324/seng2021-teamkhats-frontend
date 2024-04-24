import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Sales from "./Components/Sales"
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<About />}/>
        <Route path='/validate' element={<Work />}/>
        <Route path='/send' element={<Testimonial />}/>
        <Route path='/sales' element={<Sales />}/>
      </Routes>
      {/* <Home />
      <About />
      <Work />
      <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
