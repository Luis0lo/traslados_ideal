import './explore.css';

function Explore() {
  const galleryImages = [
    'images/playa.webp',
    'images/postres.jpg',
    'images/hotel.jpg',
    'images/plaza.jpeg',
    'images/bebidas.jpg',
    'images/pabellon.jpg',
    'images/casino.webp',
    'images/bowling.jpg',
  ];

  return (
    <section id="explore">
      <div className="contentContainerExplore">
        <p className="sectionTitle">Explora</p>
        <br />
        <p className="flotaDescription">Porque no todo es business</p>
        <br />
        <div className="imagesContainer">
          {galleryImages.map((image) => (
            <div className="card">
              <img alt={image} src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
