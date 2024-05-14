import React from "react";
import "./ProductCard.scss";

export const ProductCard = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return(
        <li className="product-card">
            {product.img && <img className='img' src={product.img} alt={product.name} />}
            <div className="card-container">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={handleAddToCart}>Adicionar</button>
            </div>
        </li>
    )
};
