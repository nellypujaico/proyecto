import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo/Video.css'
const Video = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Video */}
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <video
              src="./video/video1.mp4" 
              title="Sobre Mi Tienda"
              controls
              className="rounded shadow w-100"
            ></video>
          </div>
        </div>

        {/* Texto */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Detienen a extranjeros con pasaportes falsos en el aeropuerto Jorge Chávez
          </h2>
          <p className="text-muted">
          La Superintendencia Nacional de Migraciones junto a la Policía Nacional del Perú (PNP) y el Ministerio Público realizaron, por primera vez, un operativo de verificación y fiscalización en la zona de tránsito directo (internacional) del aeropuerto Jorge Chávez.

          </p>
          <p className="text-muted">
          Durante la intervención se detectó a dos ciudadanos de Armenia, quienes ingresaron procedentes de Brasil y pretendían viajar a México con pasaportes de otro país, presuntamente falsificados. Ambos fueron puestos a disposición de la PNP para las investigaciones de ley.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Video;
