const Home = () => {
    return (
      <div className="page-container home-container">
        <h2 className="page-title home-title">Welcome to Nail Artistry!</h2>
        <p className="home-description">
          Transform your nails into stunning works of art. We offer a wide range of services from classic manicures to bespoke nail art designs.
          Book your slot today and experience the magic!
        </p>
        <div className="home-button-wrapper">
          <button
            onClick={() => window.location.hash = '#booking'}
            className="btn-primary home-booking-btn"
          >
            Book Your Appointment Now!
          </button>
        </div>
      </div>
    );
  };

  export default Home;