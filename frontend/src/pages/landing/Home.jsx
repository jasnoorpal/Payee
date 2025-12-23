import React from "react";
import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <header class="bg-white w-full h-12 flex items-center justify-center fixed overflow-hidden">
        <div className="flex items-center justify-between w-[97%]">
          <div className="font-bold text-3xl w-1/3">Payee</div>
          <nav className="flex gap-4 w-1/3 items-center justify-center">
            <a href="#About">About</a>
            <a href="#Features">Features</a>
            <a href="#Testimonials">Testimonials</a>
          </nav>
          <div className="w-1/3 flex justify-right items-center">
            <Button>Sign In</Button> / <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <section id="Home" className="w-full h-screen overflow-hidden">
        Home
      </section>
      <section id="About" className="w-full h-screen overflow-hidden">
        About
      </section>
      <section id="Features" className="w-full h-screen overflow-hidden">
        Features
      </section>
      <section id="Testimonials" className="w-full h-screen overflow-hidden">
        Testimonials
      </section>
    </>
  );
};

export default Home;
