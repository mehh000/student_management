import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            {" "}
            <div className="text-xl font-bold">KPI</div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href={"/UserUI/login"} className="hover:text-blue-200">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
      {children}
      <h1>hellow</h1>
    </div>
  );
};

export default Layout;
