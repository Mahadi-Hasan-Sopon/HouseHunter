import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Container from "./Container";
import { useState } from "react";

const Navbar = () => {
  const user = {
    displayName: "John Doe",
    email: "john@example.com",
    photoURL: "",
  };

  const [showNav, setShowNav] = useState(false);

  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/ZXScD70/avatar.png";
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-base-100 text-blue-500"
              : ""
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <div className="flex gap-2 items-center">
        <div className="avatar flex flex-col justify-center items-center w-full">
          <div className="w-10 rounded-full ring ring-blue-400 ring-offset-blue-100 ring-offset-2">
            <img
              className="w-full h-full"
              src={user?.photoURL}
              onError={handleImageError}
            />
          </div>
          <h3 className="text-sm font-semibold mt-1">
            {user?.displayName?.length > 12
              ? user?.displayName.slice(0, 12) + "..."
              : user?.displayName}
          </h3>
        </div>
        <button
          type="button"
          className="btn btn-outline btn-error btn-sm opacity-100 font-medium py-2.5 min-h-auto h-auto px-4"
        >
          LogOut
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-base-200">
      <Container>
        <div className="navbar p-2 flex justify-between items-center">
          <div className="navbar-start flex w-full justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <img src={Logo} className="w-2/4 -mr-2" alt="Logo" /> Shelter
            </Link>

            <div className="dropdown lg:hidden flex justify-between relative">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden relative"
                onClick={() => setShowNav(!showNav)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className={`menu dropdown-content flex-col justify-center gap-4 z-[1] shadow bg-base-200 rounded-box w-60 text-lg p-4 absolute top-10 right-0 ${
                  showNav ? " flex" : "hidden"
                }`}
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal flex gap-5 justify-between px-1 text-base items-center">
              {navItems}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
