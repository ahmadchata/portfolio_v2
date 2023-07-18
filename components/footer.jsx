const Footer = () => {
  return (
    <footer className="fw-bold py-3">
      <div className="text-center">
        <span className="text-dark branch-font">
          © {new Date().getFullYear()}. With ❤️ by Ahmad Chata.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
