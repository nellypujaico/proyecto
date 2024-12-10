import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './estilo/AgregarNoticia.css';

const AgregarNoticia = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos a tu backend o base de datos
    console.log({
      title,
      description,
      content,
      image,
    });
    alert('Noticia agregada con éxito!');
  };

  return (
    <div className="add-news-container">
      <h2>Agregar Nueva Noticia</h2>
      <Form onSubmit={handleSubmit}>
        {/* Título */}
        <Form.Group controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe el título de la noticia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        {/* Descripción */}
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción breve</Form.Label>
          <Form.Control
            type="text"
            placeholder="Resumen breve de la noticia"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        {/* Contenido */}
        <Form.Group controlId="formContent">
          <Form.Label>Contenido</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Escribe el contenido completo de la noticia"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        {/* Imagen */}
        <Form.Group controlId="formImage">
          <Form.Label>Subir imagen</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>

        {/* Botón de envío */}
        <Button variant="primary" type="submit">
          Publicar Noticia
        </Button>
      </Form>
    </div>
  );
};

export default AgregarNoticia;
