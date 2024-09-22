import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Crear el objeto con los datos del formulario
    const cursoData = {
      nombre,
      creditos: parseInt(creditos), // Asegurarse de que los créditos sean un número
      descripcion,
    };

    try {
      // Hacer la solicitud POST al endpoint
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', cursoData);
      console.log('Curso creado:', response.data);
      alert('Curso enviado exitosamente');
    } catch (error) {
      console.error('Error al crear el curso:', error);
      alert('Hubo un error al enviar los datos');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Crear un Nuevo Curso</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre del curso:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del curso"
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Créditos:</label>
          <input
            type="number"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            placeholder="Créditos"
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del curso"
            required
            rows="4"
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Enviar Curso
        </button>
      </form>
    </div>
  );
};

export default CursoForm;