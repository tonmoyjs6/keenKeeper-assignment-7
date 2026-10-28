import React from "react";
import logo from "../../assets/logo.png"
import { ChartLine, House, RotateCwClock } from "lucide-react";



const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold text-xl ">
          <li >
            
            <a ><House></House>Home</a>
          </li>
          <li>
            <a > <RotateCwClock /> TimeLine</a>
          </li>

           <li>
            <a ><ChartLine/> Stats</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
