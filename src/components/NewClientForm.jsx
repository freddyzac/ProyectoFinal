import React, { useState } from 'react';

const NewClientForm = ({ addClient }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Nuevo Cliente</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default NewClientForm;

