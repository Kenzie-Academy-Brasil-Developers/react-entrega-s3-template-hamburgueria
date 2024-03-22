import { useEffect } from "react";
import style from "../../../styles/style.module.scss";

export const ProductCard = ({ product }) => {
    const addToCart = (newProduct) => {
        const localChart = JSON.parse(localStorage.getItem("@CHART")) || [];
        
        if (!localChart.some(cartItem => cartItem.id === newProduct.id)) {
            const updatedCart = [...localChart, newProduct];
            localStorage.setItem("@CHART", JSON.stringify(updatedCart));
        } else {
            alert("Produto já adicionado ao carrinho.");
        }
    };

    return (
        <li className={style.liPrincipal}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    );
};
