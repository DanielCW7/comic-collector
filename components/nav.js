import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <nav className="fixed bg-gray-900 w-screen top-0 z-10 overflow-hidden">
      <p id="nav" onClick={toggle} className="p-5 text-right"> = </p>      
      <ul
        id="navOptions"
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "open" : "closed"
        }`}
      >
        <li className="p-2 text-right">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 text-right">
          <Link href="/search">Search</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;
