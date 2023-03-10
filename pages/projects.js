import Head from "next/head";
const Projects = () => {
  return (
    <>
      <Head>
        <title>Ahmad Chata - Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="projects-wrapper">
        <h4 className="name gray">PROJECTS.</h4>
        <ul className="list-unstyled mt-4">
          <li className="link">
            <a
              className="github pb-3 fs-6 link-secondary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/ahmadchata/newsweek"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="live pb-3 ms-2 fs-6 link-secondary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://raw.githack.com/ahmadchata/newsweek/feature-homepage/index.html"
            >
              <i className="fas fa-satellite-dish"></i>
            </a>{" "}
            <p className="text-uppercase">
              <b>newsweek</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>Bimacred website</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>Rootsearch Security Nigeria Limited Website</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>Armed Forces Radio</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>Logxercise</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>CSS Linter</b>
            </p>
          </li>
          <li className="link">
            <p className="text-uppercase">
              <b>Social Media</b>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
