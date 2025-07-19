const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Nail Artistry. All rights reserved.</p>
          <div className="footer-social-links">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Pinterest</a>
          </div>
          <p className="footer-contact-info">Contact: info@nailartistry.com | (123) 456-7890</p>
        </div>
      </footer>
    );
  };

  export default Footer;