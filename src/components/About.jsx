const About = () => {
    return (
      <div className="page-container about-container">
        <h2 className="page-title">About Our Nail Artist</h2>
        <div className="about-content">
          <div className="about-artist-photo-wrapper">
            <img
              src="https://placehold.co/300x300/ffc0cb/000000?text=Artist+Photo"
              alt="Nail Artist"
              className="about-artist-photo"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/ffc0cb/000000?text=Artist+Photo'; }}
            />
          </div>
          <div className="about-text-content">
            <p className="about-paragraph">
              Hello! I'm <span className="about-artist-name">Sophia Artista</span>, the passionate nail artist behind Nail Artistry.
              With over 10 years of experience in the beauty industry, my journey into nail art began with a simple fascination for colors,
              textures, and the intricate details that transform ordinary nails into miniature masterpieces.
            </p>
            <p className="about-paragraph">
              My philosophy is simple: every set of nails tells a story, and I'm here to help you express yours.
              I specialize in a wide range of techniques, from classic elegance to avant-garde designs,
              using only the highest quality, cruelty-free products. I constantly stay updated with the latest trends
              and techniques to ensure you receive the best and most innovative nail care.
            </p>
            <p className="about-paragraph">
              Beyond the brush strokes, my goal is to create a relaxing and enjoyable experience for every client.
              I believe that getting your nails done should be a moment of self-care, a time to unwind and feel pampered.
              I love connecting with my clients, understanding their vision, and bringing it to life with precision and creativity.
            </p>
            <p className="about-paragraph">
              Thank you for considering Nail Artistry. I look forward to meeting you and making your nail dreams a reality!
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default About;