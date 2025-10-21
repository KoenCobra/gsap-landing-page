import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-4xl font-bold text-indigo-200">Hello World</h1>
    </div>
  );
};

export default App;
