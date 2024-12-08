"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export function NavLinks() {
  const pathname = usePathname();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-expand-lg navbar-light bg-light mb-2 mt-2 rounded-2 sticky-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active  ${pathname === "/" ? "active" : ""}`} href="/" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className={`nav-link dropdown-toggle`} href="" data-bs-toggle="dropdown" aria-expanded="false">
                Research
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className={`nav-link ${pathname === "/research" ? "active" : ""}`} href="/research">
                    Hydro-Geology
                  </Link>
                </li>
                <li>
                  <Link className={`nav-link ${pathname === "/resources" ? "active" : ""}`} href="/resources">
                    Resources
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/publications" ? "active" : ""}`} href="/publications">
                Publications
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
