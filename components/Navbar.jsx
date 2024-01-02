import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-center" bs-data-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Bolt Corps
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Ideathon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Hackathon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sessions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Workshops
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className="nav-link" href="#">
                Blogs
              </Link>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Sponsors & Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="btn btn-outline-success" href="#">
                  Host
                </Link>
              </li>
              &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="btn btn-outline-warning" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
