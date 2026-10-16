import { NavLink } from "react-router-dom";
import { profile } from "../data/portfolio";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Learning", to: "/learning" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-4">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="text-xl font-black tracking-tight hover:text-primary transition-colors"
          >
            {profile.name}
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 font-medium">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-lg transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <a
            href={profile.cv}
            download
            className="btn btn-primary btn-sm rounded-full hidden sm:inline-flex"
          >
            Download CV
          </a>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.name}</NavLink>
                </li>
              ))}
              <li>
                <a href={profile.cv} download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}