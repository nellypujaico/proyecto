import React, { useState } from 'react';
import './AgregarNoticia.css'; // Asegúrate de tener este archivo de estilos

const AgregarNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [noticias, setNoticias] = useState([]); // Estado para almacenar las noticias

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto con la noticia
    const nuevaNoticia = { titulo, contenido, imagen };
    
    // Agregar la nueva noticia al estado
    setNoticias([nuevaNoticia, ...noticias]);

    // Limpiar los campos del formulario
    setTitulo('');
    setContenido('');
    setImagen(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(URL.createObjectURL(file)); // Previsualización de la imagen
    }
  };

  return (
    <div className="agregar-noticia-container">
      <h1>Agregar Noticia</h1>
      <form onSubmit={handleSubmit} className="agregar-noticia-form">
        <div>
          <label>Título de la Noticia:</label>
          <input
            type="text"
            placeholder="Ingresa el título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contenido de la Noticia:</label>
          <textarea
            placeholder="Escribe el contenido de la noticia"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Imagen (opcional):</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagen && <img src={imagen} alt="Previsualización" className="imagen-prev" />}
        </div>
        <button type="submit">Agregar Noticia</button>
      </form>

      {/* Mostrar las noticias después de enviarlas */}
      <div className="noticias-lista">
        <h2>Noticias Recientes</h2>
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <div key={index} className="noticia-card">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.contenido}</p>
              {noticia.imagen && <img src={noticia.imagen} alt="Imagen de la noticia" className="imagen-noticia" />}
            </div>
          ))
        ) : (
          <p>No hay noticias para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default AgregarNoticia;
