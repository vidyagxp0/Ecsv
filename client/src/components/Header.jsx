import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="bg-white h-12 w-auto shadow-2xl flex justify-between items-center px-8 pr-20 ">
      <div className="flex gap-4">
        <img src="./vidyaGxp_logo.png" alt="" className="h-12" />
        <h1
          className="text-blue-500 text-2xl font-medium flex items-center gap-2"
          style={{ fontFamily: "cursive" }}
        >
          <SiPaloaltosoftware />
          eCSV
        </h1>
      </div>
      <div>
        <h1
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownClose}
          className="border border-blue-500 bor text-blue-500 font-bold py-2 px-4 rounded-full h-9 flex items-center gap-2 cursor-pointer"
        >
          Gaurav
        </h1>
        {isDropdownOpen && (
          <div className="flex flex-col absolute bg-white shadow-lg mt-2 p-2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white p-2 rounded-full">GM</div>
              <div className="flex flex-col items-center">
                <p className="text-gray-800">Gaurav</p>
                <p className="text-gray-500"></p>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
                <NavLink to="/about" className="text-blue-500 font-medium hover:text-blue-700" activeClassName="text-blue-700">
                    About
                </NavLink>
                <NavLink to="/login" className="text-blue-500 font-medium hover:text-blue-700" activeClassName="text-blue-700" onClick={() => localStorage.clear()}>
                    Log Out
                </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
