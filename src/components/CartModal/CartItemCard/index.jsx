import React from "react";
import { MdDelete } from "react-icons/md";
import "./CartItemCard.scss";

export const CartItemCard = ({ product, removeFromCart }) => {
   const handleRemoveFromCart = () => {
      removeFromCart(product.id); 
   };

   return (
      <li className="cart-item">
         <div className="cart-item-details">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button className="delete-button" aria-label="delete" title="Remover item" onClick={handleRemoveFromCart}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
