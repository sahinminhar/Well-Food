import React from "react";
import food from "../../../assets/img/food.jpg";
import { Link } from "react-router-dom";

const dashboard = ({ handleShow }) => {
  return (
    <header className="bg-black min-h-screen relative">
      <div className="flex">
        <div className="flex">
          <svg
            width="50"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10"
          >
            <path
              d="M10 32H30V36H10V32ZM10 28C10 22 14 18 20 18C26 18 30 22 30 28H10ZM20 14C16.5 14 13.5 16.5 13 19H27C26.5 16.5 23.5 14 20 14Z"
              fill="#FF4500"
              mb-3
            />
          </svg>
          <span className="text-orange-500 text-2xl mt-3 font-bold">
            WELLFOOD
          </span>
        </div>
        <nav className="ml-[300px]">
          <ul className="flex space-x-5 mt-3">
            <Link to="/home" className="menu">
              <li>HOME</li>
            </Link>

            <Link to="/menu" className="text-white hover:text-orange-500">
              <li>MENU</li>
            </Link>

            <Link to="/contact" className="text-white hover:text-orange-500">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </nav>
        <div className="flex space-x-3 mt-3">
          <span className="text-white ml-[450px]">CALL: +880 123 456 78</span>
          <button
            onClick={handleShow}
            className="bg-orange-500 text-white  w-[100px] h-[30px] pb-5 rounded"
          >
            sign in
          </button>
        </div>
      </div>
      <div className="flex">
        {/* <img src={tomato} width={300} className="mt-[10px]" /> */}
        <img
          src={food}
          width={550}
          height={350}
          className="absolute ml-[900px] mt-[60px] mb-[1000px]"
        />
      </div>

      <div className="ml-[50px]">
        <p className="text-yellow-400 text-lg mb-5 items-center">
          🍔 Start price ONLY $25
        </p>
      </div>

      <h1 className="text-7xl text-white font-bold leading-tight mb-5 ml-[50px] ">
        DELICIOUS FOOD <br className="text-sm" /> NEAR YOUR <br />
        TOWN
        <br />
        <p className="text-lg font-thin">
          Welcome to our culinary sanctuary, where every dish tells a story
          <br /> every bite is an adventure at our food website, we invite
        </p>
      </h1>

      <button className="relative p-3 bg-orange-500 text-white  w-[200px] h-[50px] pb-5 rounded ml-[50px]">
        View All Menu
      </button>
      <div></div>
    </header>
  );
};

export default dashboard;
