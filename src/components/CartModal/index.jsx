import React from "react";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import "./CartModal.scss";

export const CartModal = ({ cartList, total, removeFromCart, clearCart, isOpen, onRequestClose }) => {
   const handleItemClick = (event) => {
      event.stopPropagation(); 
   };

   return (
      <>
         {isOpen && (
            <div className="cart-modal-overlay" onClick={onRequestClose}>
               <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                     <h2>Carrinho de compras</h2>
                     <button aria-label="close" title="Fechar" onClick={onRequestClose}>
                        <MdClose size={21} />
                     </button>
                  </div>
                  <div className="modal-body">
                     <ul>
                        {cartList.map((product) => (
                           <CartItemCard
                              key={product.id}
                              product={product}
                              removeFromCart={removeFromCart}
                              onClick={handleItemClick} 
                           />
                        ))}
                     </ul>
                  </div>
                  <div className="modal-footer">
                     <div className="total">
                        <span>Total</span>
                        <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                     </div>
                     <button onClick={clearCart}>Remover todos</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};
