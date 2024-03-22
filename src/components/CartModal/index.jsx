import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useState, useEffect } from "react";
import styles from "../../styles/style.module.scss";

export const CartModal = ({children, setIsOpen}) => {
   const localChart = localStorage.getItem("@CHART");
  
   const cartList = localChart ? JSON.parse(localChart) : [];
   
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + parseFloat(product.price);
   }, 0);

   const clearCart = () => {
      localStorage.removeItem("@CHART");
      setIsOpen(false);
   }

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={styles.divTitle}>
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" className={styles.closeButton} onClick={()=>setIsOpen(false)}>
            
               <MdClose size={21} />
              
               </button>
               {children}
            
            </div>
            <div>
               <ul className={styles.ulModal}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div>
               <div>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={clearCart}>Remover todos</button>
            </div>
         </div>
      </div>
      
   );
};
