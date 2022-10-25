import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './explore.css';

const text = {
  en: {
    title: 'Explore',
    p1: 'After business...',
  },
  es: {
    title: 'Explora',
    p1: 'Porque no todo es Business',
  },
};
function Explore() {
  const { language } = useContext(LanguageContext);

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
        <p className="sectionTitle">{text[language].title}</p>
        <br />
        <p className="flotaDescription">{text[language].p1}</p>
        <br />
        <div className="imagesContainer">
          {galleryImages.map((image) => (
            <div key={image} className="card">
              <img alt={image} src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
