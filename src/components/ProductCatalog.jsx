import React, { useState } from 'react';
import './ProductCatalog.css';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
    { id: 1, name: 'Refrigerador', image: 'assets/refrigerator.png', price: 'Q800' },
    { id: 2, name: 'Tablet', image: 'assets/tablet.png', price: 'Q200' },
    { id: 3, name: 'Televisión', image: 'assets/tv.png', price: 'Q500' },
    { id: 4, name: 'Aire Acondicionado', image: 'assets/air_conditioner.png', price: 'Q300' },
    { id: 5, name: 'Cámara de video', image: 'assets/camcorder.png', price: 'Q400' },
];

const ProductCatalog = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="product-catalog-container">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            <h2>Catálogo de Productos</h2>
            <div className="catalog-container">
                {initialProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
