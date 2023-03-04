import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="d-flex px-4 py-3 justify-content-between align-items-center branch-font sticky-top">
      <div>
        <Link href={`/`} className="text-decoration-none orange">
          <h2 className="fw-bold dot m-0"></h2>
        </Link>
      </div>
      <ul className="d-flex list-unstyled mb-0">
        <li>
          <Link href={`/`} className="links">
            Home
          </Link>
        </li>
        <li className="mx-5">
          <Link href={`/projects`} className="links">
            Projects
          </Link>
        </li>

        <li>
          <Link href={`/`} className="links">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
