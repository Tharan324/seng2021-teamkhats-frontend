import { React, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import InvoiceForm from './Components/InvoiceForm';
import Login from './Components/Login';
import Register from './Components/Register';
import Sales from './Components/Sales';
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";

function App() {
  let isToken = null;
  if (localStorage.getItem('token') && localStorage.getItem('token') !== "undefined") {
    isToken = JSON.parse(localStorage.getItem('token'));
  }

  const [token, setToken] = useState(isToken);

  const setTokenAbstract = (token) => {
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<InvoiceForm token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path='/validate' element={<Work token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path='/send' element={<Testimonial token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path='/login' element={<Login token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path='/register' element={<Register token={token} setToken={(token) => setTokenAbstract(token)}/>} />
        <Route path='/sales' element={<Sales token={token} setToken={(tokne) => setTokenAbstract(token)}/>} />
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
