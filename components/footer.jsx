const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark fw-bold py-3">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L34.3,96C68.6,96,137,96,206,106.7C274.3,117,343,139,411,160C480,181,549,203,617,202.7C685.7,203,754,181,823,160C891.4,139,960,117,1029,122.7C1097.1,128,1166,160,1234,186.7C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg> */}
      {/* <div className="mb-1 socials-footer">
        <a
          className="twitter"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/ahmadchata/"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ahmadchata/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/ahmadchata/"
        >
          <i className="fab fa-github"></i>
        </a>
      </div> */}
      <div className="text-center">
        <span className="text-white branch-font">
          © 2021. Made with ❤️ by Ahmad Chata.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
