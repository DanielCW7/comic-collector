import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <nav className="fixed bg-gray-900 w-screen top-0 z-10 overflow-hidden">
      
      <p id="nav" onClick={toggle} className="py-5 px-20 text-left cursor-pointer shadow-xl"> = </p>      
      <ul id="navOptions" className={`transition-all duration-500 overflow-hidden ${ isOpen ? "open" : "closed" }`}>
        <li className="py-2 px-20 text-left"><Link href="/">Home</Link></li>
        <li className="py-2 px-20 text-left"><Link href="/search">Search</Link></li>
        <li className="py-2 px-20 text-left"><Link href="/collections">Collections</Link></li>
      </ul>

    </nav>
  );
};

export default Nav;
