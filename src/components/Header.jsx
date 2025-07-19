const Header = ({ setCurrentPage }) => {
    return (
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Nail Artistry</h1>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li><button onClick={() => setCurrentPage('home')} className="header-nav-button">Home</button></li>
              <li><button onClick={() => setCurrentPage('booking')} className="header-nav-button">Booking</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="header-nav-button">Services</button></li>
              <li><button onClick={() => setCurrentPage('gallery')} className="header-nav-button">Gallery</button></li>
              <li><button onClick={() => setCurrentPage('reviews')} className="header-nav-button">Reviews</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="header-nav-button">About</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="header-nav-button">Contact Us</button></li>

              {/* <li><button onClick={() => setCurrentPage('registerUser')} className="header-nav-button">Register</button></li> */}
            </ul>
          </nav>
        </div>
      </header>
    );
  };
export default Header;  