"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light mb-2 mt-2 rounded-2 sticky-top">
      <div className="collapse navbar-collapse offset-1" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className={`navbar-brand  ${pathname === "/" ? "active" : ""}`} href="/" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`navbar-brand  ${pathname === "/research" ? "active" : ""}`} href="/research">
              Research
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className={`navbar-brand ${pathname === "/publications" ? "active" : ""}`} href="/publications">
              Publications
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className={`navbar-brand ${pathname === "/about" ? "active" : ""}`} href="/about">
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className={`navbar-brand ${pathname === "/resources" ? "active" : ""}`} href="/resources">
              Resources
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
