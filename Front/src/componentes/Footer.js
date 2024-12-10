import React from 'react';
import './estilo/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Redes sociales */}
        <div className="footer-section social-media">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

       

        {/* Información de contacto */}
        <div className="footer-section contact-info">
          <h4>Contáctanos</h4>
          <p>Email: nellypujaicoq@gmail.com@gmail.com</p>
          <p>Teléfono: +51 972 532 306</p>
          <p>Dirección: Cañete Imperial Asunción </p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MagalyCañete. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
