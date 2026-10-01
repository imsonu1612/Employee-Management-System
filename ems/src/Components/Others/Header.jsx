import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between ">
      <div>
        <h1 className="text-2xl font-medium">
          Hello <br /> <span className="text-3xl font-semibold">Users!👋</span>
        </h1>
      </div>
      <div>
        <button className="font-semibold bg-red-600 px-2 py-2 rounded-lg text-white  active:scale-95 cursor-pointer">Log out</button>
      </div>
    </div>
  );
};

export default Header;
