import React, { useState } from 'react';
import './Registrarse.css'; // Asegúrate de importar el archivo de estilos

const Registrarse = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el objeto con los datos del formulario
    const usuario = {
      nombre_usuario: nombreUsuario,
      correo: correo,
      contraseña: contraseña,
    };

    // Enviar los datos al backend
    try {
      const response = await fetch('http://localhost:5000/api/registrarse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setMensaje('Usuario registrado con éxito');
      } else {
        setMensaje('Hubo un error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setMensaje('Error de conexión');
    }
  };

  return (
    <div className="registrarse-container">
      <form className="registrarse-form" onSubmit={handleSubmit}>
        <h1>Registrarse</h1>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>

      {/* Mostrar mensaje de éxito o error */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registrarse;
