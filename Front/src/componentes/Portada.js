import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './estilo/Portada.css'; // Asegúrate de tener tu archivo CSS con los estilos

const Portada = () => {
  return (
    <div className="cover-container">
      <Row>
        {/* Columna izquierda: Foto de portada con texto */}
        <Col lg={8} className="cover-column">
          <div className="cover-photo">
            <h1 className="cover-text">Nelly Libertad y su Pandilla</h1>
            <Button className="btn-discover" variant="danger" size="lg">Descubre Más</Button>
          </div>
        </Col>

        {/* Columna derecha: Imágenes más pequeñas */}
        <Col lg={4} className="sidebar-column">
          <Card className="small-image hover-effect">
            <Card.Img variant="top" src="./img/mini1.jpeg" />
          </Card>
          <Card className="small-image hover-effect mt-3">
            <Card.Img variant="top" src="./img/mini2.jpeg" />
          </Card>
          <Card className="small-image hover-effect mt-3">
            <Card.Img variant="top" src="./img/mini3.jpeg" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portada;
