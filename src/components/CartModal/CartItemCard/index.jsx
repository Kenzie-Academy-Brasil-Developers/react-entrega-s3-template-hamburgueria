import { MdDelete } from "react-icons/md";
import styles from "../../../styles/style.module.scss"
import { useEffect, useState } from "react";


export const CartItemCard = ({ children, product }) => {
   const [newLocalChart, setNewLocalChart] = useState([])
   const chartData = localStorage.getItem("@CHART");
   useEffect(() => {
      
      if (chartData) {
        setNewLocalChart(JSON.parse(chartData));
      }
    }, []);
    
    const removeItem = (productId) => {
      const newChart = newLocalChart.filter(element => element.id !== productId);
      setNewLocalChart(newChart);
    }
    
  
  

   useEffect (()=>{
      localStorage.setItem("@CHART", JSON.stringify(newLocalChart))


   },[newLocalChart])

   return (
      <li className={styles.liModal}>
         <div className={styles.itemCard}>
            <img src={product.img} alt={product.name} className={styles.imgModal}/>
            <div className={styles.center}>
               <h3>{product.name}</h3>
               <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
            <button aria-label="delete" title="Remover item" className={styles.removeButton} onClick={()=>removeItem(product.id)}>
            <MdDelete size={21} />
         </button>
         {children}
            
         </div>
         
      </li>
   );
};
