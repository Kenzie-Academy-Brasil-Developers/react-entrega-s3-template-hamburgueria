import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {

   
   const [productList, setProductList] = useState([]);
   

   useEffect (() => {
      const getApi = async () => {
         const { data } = await api.get("products");
         setProductList(data);
      }
      getApi();
   },[])

   
   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} />
            
         </main>
      </>
   );
};
