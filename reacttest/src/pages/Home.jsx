import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";


function Home() {
  const userName = localStorage.getItem("name");

  return (
    <>
      <Navbar />
      {/* <div className="flex justify-center items-center h-screen w-full">
        <div className="flex items-center justify-center max-sm:flex-col border border-[#7f5539] p-2
         bg-[#e6ccb2]">
          <div className="h-[10%] w-[50%] mb-3 max-sm:w-[30%] max-sm:h-[10%]">
            <img
              src="https://i.pinimg.com/564x/28/a5/38/28a53818427467bceef016911ed494b4.jpg"
              alt="welcome image"
              className="h-full w-full"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center 
        w-[60%]"
          >
            <h1 className="text-2xl">
              Welecom, <span>{userName}</span> to Library project{" "}
            </h1>
          </div>
        </div>
      </div> */}
      <div className="hero bg-[#f0dac4] min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
          {userName &&   <h1 className="text-5xl font-bold">Hello <span className=" text-yellow-600">{userName.toUpperCase()}</span></h1>}
          {!userName &&   <h1 className="text-5xl font-bold">Hello <span className=" text-yellow-600">there</span></h1>}
            <p className="py-6">
              We are Welcoming you to Library project
              we provide different types of books, but you have to register to see all of our 
              Books, Click below.👇
            </p>
            <Link to='/register' >
            <button className="btn bg-yellow-600 hover:bg-yellow-700">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
