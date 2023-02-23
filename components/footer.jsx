const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom py-2">
      <div className="mb-1 socials-footer">
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
      </div>
      <div className="text-center">
        <span className="text-light branch-font">
          © 2021. Made with ❤️ by Ahmad Chata.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
