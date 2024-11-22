import React, { useState } from 'react';
import './CatalogAndABC.css';
import NewClientForm from './NewClientForm';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
    { id: 1, name: 'Refrigerador', image: 'assets/refrigerator.png', price: 'Q8,000' },
    { id: 2, name: 'Tablet', image: 'assets/tablet.png', price: 'Q2,100' },
    { id: 3, name: 'Televisión', image: 'assets/tv.png', price: 'Q5,000' },
    { id: 4, name: 'Aire Acondicionado', image: 'assets/air_conditioner.png', price: 'Q3,500' },
    { id: 5, name: 'Cámara de video', image: 'assets/camcorder.png', price: 'Q4,000' },
];

const CatalogAndABC = () => {
    const [clients, setClients] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const addClient = (client) => {
        setClients([...clients, client]);
    };

    const handleLogout = () => {
        navigate('/');
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const handlePurchase = () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. Añade productos al carrito antes de proceder.");
            return;
        }
        alert(`Compra realizada con éxito. Total a pagar: Q${cart.reduce((total, product) => total + parseFloat(product.price.slice(1)), 0)}`);
        setCart([]);
    };

    return (
        <div className="catalog-and-abc-container">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <h2>Tienda de Electrodomesticos</h2>
            <div className="catalog-container">
                {initialProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
            <h2>Carrito</h2>
            <div className="cart-container">
                {cart.map((product, index) => (
                    <div key={index} className="cart-item">
                        <span>{product.name} - {product.price}</span>
                    </div>
                ))}
                {cart.length > 0 && <button className="purchase-button" onClick={handlePurchase}>Comprar</button>}
            </div>
            <h2>Registro de Clientes</h2>
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

export default CatalogAndABC;
