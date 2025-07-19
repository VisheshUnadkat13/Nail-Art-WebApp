const Gallery = () => {
    const images = [
      { id: 1, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+1', after: 'https://placehold.co/400x300/ff69b4/ffffff?text=After+1' },
      { id: 2, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+2', after: 'https://placehold.co/400x300/8a2be2/ffffff?text=After+2' },
      { id: 3, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+3', after: 'https://placehold.co/400x300/00ced1/ffffff?text=After+3' },
      { id: 4, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+4', after: 'https://placehold.co/400x300/ff4500/ffffff?text=After+4' },
      { id: 5, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+5', after: 'https://placehold.co/400x300/7cfc00/ffffff?text=After+5' },
      { id: 6, before: 'https://placehold.co/400x300/a0a0a0/ffffff?text=Before+6', after: 'https://placehold.co/400x300/da70d6/ffffff?text=After+6' },
    ];
  
    return (
      <div className="page-container gallery-container">
        <h2 className="page-title">Before & After Gallery</h2>
        <p className="gallery-description">See the amazing transformations we've created!</p>
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img src={img.before} alt={`Before ${img.id}`} className="gallery-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/a0a0a0/ffffff?text=Image+Error'; }} />
                <img src={img.after} alt={`After ${img.id}`} className="gallery-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/ff69b4/ffffff?text=Image+Error'; }} />
              </div>
              <div className="gallery-card-footer">
                <p className="gallery-card-text">Transformation #{img.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Gallery;