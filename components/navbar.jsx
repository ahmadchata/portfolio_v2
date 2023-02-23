import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center pt-3 fw-bold branch-font fs-5 shadow-sm sticky-top bg-white">
      <ul className="d-flex list-unstyled">
        <li>
          <Link href={`/`} className="links">
            HOME
          </Link>
        </li>
        <li className="mx-5">
          <Link href={`/projects`} className="links">
            PROJECTS
          </Link>
        </li>

        <li>
          <Link href={`/blogs`} className="links">
            BLOG
          </Link>
        </li>

        <li className="ms-5">
          <Link href={`/about`} className="links">
            ABOUT{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
