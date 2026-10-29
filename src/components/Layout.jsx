import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const LINKS = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/our-story", "Our Story"],
  ["/visit", "Visit"],
];

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
},[pathname]);

  return (
    <>
      <header>
        <div className="wrap bar">
          <Link className="logo" to="/">
            NOIR &amp; BEAN<small>BROOKLYN, NY</small>
          </Link>
          <nav aria-label="Main">
            {LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <span className="open">Open today until 5:00 PM</span>
          <Link className="btn" to="/menu">
            ORDER PICKUP
          </Link>
        </div>
      </header>
      <main>
        <div className="wrap view">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="wrap foot">
          <span>
            © {new Date().getFullYear()} NOIR &amp; BEAN · 482 Atlantic Avenue,
            Brooklyn
          </span>
          <nav aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/our-story">About</Link>
            <Link to="/visit">Contact</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
