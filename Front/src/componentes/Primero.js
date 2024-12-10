import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './estilo/Primero.css'; // Asegúrate de que el archivo CSS está importado

const Primero = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="/" style={{padding:' 10px 20px '}}>MagalyCañete</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/agregar-noticia">Agregar Noticia</Nav.Link>
          <Nav.Link href="/categoria">Categoria</Nav.Link>
          <Nav.Link href="/registrarse">Registrarse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Primero;
