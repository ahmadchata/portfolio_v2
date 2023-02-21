const Projects = () => {
  return (
    <>
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
      <div className="light-green">
        <h3 className="description text-uppercase text-start py-5 px-4">
          Logxercise
        </h3>

        <p className="description px-2">
          A Web app for logging and grouping exercises. Built with Ruby on
          Rails, Sass and Bootstrap
        </p>
        <a
          className="github pb-3 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmadchata/logxercise"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="live pb-3 ms-4 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://young-mesa-60051.herokuapp.com/"
        >
          <i className="fas fa-satellite-dish"></i>
        </a>
      </div>
      <div className="gold">
        <h3 className="description text-uppercase text-start py-5 px-4">
          Css Linter
        </h3>

        <p className="description px-2">
          A Terminal app that check for errors in CSS files. Built with Ruby
        </p>
        <a
          className="github pb-3 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmadchata/Linter_CSS"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="dark-gray">
        <h3 className="description text-uppercase text-start py-5 px-4">
          DEV Directory
        </h3>

        <p className="description px-2">
          A front-end website for finding developers. Built with HTML, CSS and
          Bootstrap
        </p>
        <a
          className="github pb-3 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmadchata/dev-directory"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="live pb-3 ms-4 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://raw.githack.com/ahmadchata/dev-directory/homepage/index.html"
        >
          <i className="fas fa-satellite-dish"></i>
        </a>
      </div>
      <div className="pink">
        <h3 className="description text-uppercase text-start py-5 px-4">
          Social Media
        </h3>

        <p className="description px-2">
          A simple social media web app for posting your thoughts and adding
          friends. Built with Ruby on Rails, Sass and Bootstrap
        </p>
        <a
          className="github pb-3 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmadchata/social-media"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="live pb-3 ms-4 fs-3 link-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://salty-stream-05643.herokuapp.com/"
        >
          <i className="fas fa-satellite-dish"></i>
        </a>
      </div>
    </>
  );
};

export default Projects;
