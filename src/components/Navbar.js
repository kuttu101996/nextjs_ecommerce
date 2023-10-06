"use client";
import { adminNavOptions } from "@/utils";
import React, { Fragment } from "react";

const isAdminView = true;
const isAuthUser = false;
const user = {
  role: "admin",
};

function NavItem() {
  return (
    <div
      className="items-center justify-center w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul
        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
      rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white"
      >
        {isAdminView
          ? adminNavOptions.map((item) => {
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>;
            })
          : null}
      </ul>
    </div>
  );
}

const Navbar = () => {
  return (
    <>
      {/* Nav items of navbar different from client view and different from user view */}
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            {/* <img src="" alt="" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Next Ecomm
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser && (
              <Fragment>
                <button>Account</button>
                <button>Cart</button>
              </Fragment>
            )}
            {user.role === "admin" ? (
              isAdminView ? (
                <button>Client View</button>
              ) : (
                <button>Admin View</button>
              )
            ) : null}
            {isAuthUser ? <button>Log Out</button> : <button>Log In</button>}
          </div>
          <NavItem />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
