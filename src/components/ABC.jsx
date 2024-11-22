import React, { useState } from 'react';
import './ABC.css';
import NewClientForm from './NewClientForm';
import { useNavigate } from 'react-router-dom';

const ABC = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="abc-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <NewClientForm addClient={addClient} />
      <h2>Lista de Clientes</h2>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>{client.name} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ABC;
