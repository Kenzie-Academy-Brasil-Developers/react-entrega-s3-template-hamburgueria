import React, { useState, useEffect } from 'react';
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import "./HomePage.scss";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [cartTotal, setCartTotal] = useState(0);
   const [isCartModalOpen, setIsCartModalOpen] = useState(false); 


   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products');
            if (!response.ok) {
               throw new Error('Erro ao buscar produtos');
            }
            const data = await response.json();
            setProductList(data);
         } catch (error) {
            console.error('Erro:', error);
         }
      };

      fetchProducts();
   }, []);


   useEffect(() => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
         setProductList(JSON.parse(storedProducts));
      }
   }, []);


   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(productList));
   }, [productList]);


   const addToCart = (product) => {
      setCartList([...cartList, product]);
      setCartTotal(cartTotal + product.price);
   };


   const removeFromCart = (productId) => {
      const updatedCart = cartList.filter(item => item.id !== productId);
      const removedItem = cartList.find(item => item.id === productId);
      setCartList(updatedCart);
      setCartTotal(cartTotal - removedItem.price);
   };


   const clearCart = () => {
      setCartList([]);
      setCartTotal(0);
   };


   const openCartModal = () => {
      setIsCartModalOpen(true);
   };


   const closeCartModal = () => {
      setIsCartModalOpen(false);
   };

   return (
      <>
         <Header cartItemCount={cartList.length} openCartModal={openCartModal} />
         <main className="main">
            <ProductList productList={productList} addToCart={addToCart} />
            <CartModal
               cartList={cartList}
               total={cartTotal}
               removeFromCart={removeFromCart}
               clearCart={clearCart}
               isOpen={isCartModalOpen}
               onRequestClose={closeCartModal} 
            />
         </main>
      </>
   );
};

export default HomePage;
