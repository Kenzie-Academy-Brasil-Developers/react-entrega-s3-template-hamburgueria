import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { CartModal } from "../CartModal";

export const Header = () => {
  
   const [isOpen, setIsOpen] = useState(false)


   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={()=>setIsOpen(true)} aria-label="Abrir carrinho">
                <MdShoppingCart size={21} />
                
                <span>0</span>
            </button>
            
            <form>
               <input
                  type="text"
               
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
               {isOpen ? <CartModal /> : null}
            </form>
         </div>
         
      </header>
      
   );
};
