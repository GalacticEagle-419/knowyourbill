import React from "react";

const Header = () => {
  return (
    <nav className="bg-primary border-gray-200 px-2 sm:px-4 py-6">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Billology - Know Your Bill
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
