import React, { useState, useEffect } from 'react';
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import "./HomePage.scss";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [cartTotal, setCartTotal] = useState(0);
   const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Estado para controlar a abertura/fechamento do modal do carrinho

   // useEffect montagem - carrega os produtos da API e joga em productList
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

   // Carregar produtos do localStorage quando o componente for montado
   useEffect(() => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
         setProductList(JSON.parse(storedProducts));
      }
   }, []);

   // Salvar produtos no localStorage sempre que productList for atualizado
   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(productList));
   }, [productList]);

   // Adicionar um produto ao carrinho
   const addToCart = (product) => {
      setCartList([...cartList, product]);
      setCartTotal(cartTotal + product.price);
   };

   // Remover um produto do carrinho
   const removeFromCart = (productId) => {
      const updatedCart = cartList.filter(item => item.id !== productId);
      const removedItem = cartList.find(item => item.id === productId);
      setCartList(updatedCart);
      setCartTotal(cartTotal - removedItem.price);
   };

   // Limpar o carrinho
   const clearCart = () => {
      setCartList([]);
      setCartTotal(0);
   };

   // Função para abrir o modal do carrinho
   const openCartModal = () => {
      setIsCartModalOpen(true);
   };

   // Função para fechar o modal do carrinho
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
               isOpen={isCartModalOpen} // Passando o estado para o modal do carrinho
               onRequestClose={closeCartModal} // Passando a função de fechar o modal para o modal do carrinho
            />
         </main>
      </>
   );
};

export default HomePage;
