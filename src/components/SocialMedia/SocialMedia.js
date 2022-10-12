import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './socialMedia.css';

function SocialMedia() {
  return (
    <div className="socialContainer">
      <a
        aria-label="Visit Instagram account"
        href="https://www.instagram.com/traslados_ideal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram className="iconI" />
      </a>
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/584242426636"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="iconW" />
      </a>
    </div>
  );
}

export default SocialMedia;
