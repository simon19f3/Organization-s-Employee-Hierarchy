import React from "react";
import Navigation from "./navigation";
import SelfIntroduction from "./selfIntroduction";
import About from "./about";
import Service from "./service";
import Work from "./work";

function page() {
  return (
   
    <div className="flex flex-col my-5 ">
      <Navigation/>
      <SelfIntroduction/>
      <About/>
      <Service/> 
      <Work/> 
    </div>
    
  )
}

export default page
