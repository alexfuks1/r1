import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";

import $ from 'jquery';

const App = () => {
  const [counter, setCounter] = useState(1);
  const sliderCounter = (index) => {
    let val  = index;
    setCounter(val);
  };
  useEffect(() => {
    jQuerycode();
    // let x = event.pageX;
  }, [])

  const jQuerycode = () => {
    $(document).mousemove(function(e){
      // var x = window.scrollX;
      let x = e.pageX;
      let y = e.pageY;
      if(window.innerWidth > 999){
        if(x > 950){
          $('.swiper-button-next').show();
          $('.swiper-button-next').css({left:e.pageX,top:e.pageY});
        } else{
          $('.swiper-button-next').hide()
        }
  
        if(x < 950){
          $('.swiper-button-prev').show();
          $('.swiper-button-prev').css({left:e.pageX,top:e.pageY});
        } else{
          $('.swiper-button-prev').hide()
        } 
      } else{
        return false;
      }
    })
  }
  return (
    <>
      <Router>
        <Header />
        {/* <Route exact path="/" component={Home} /> */}
        <Route
          path="/"
          render={(props) => <Home sliderCounter={sliderCounter} {...props} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Footer counter={counter} />
      </Router>
    </>
  );
};

export default App;
