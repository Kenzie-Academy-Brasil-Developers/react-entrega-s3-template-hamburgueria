import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "./Header.scss"; // Importando o arquivo SCSS

export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header className="header">
         <img src={Logo} alt="Logo Kenzie Burguer" className="logo" />
         <div className="header-content">
            <button className="header-button">
                <MdShoppingCart size={21} className="header-icon" />
                <span className="header-cart-counter">0</span>
            </button>
            <form className="header-form">
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="header-input"
               />
               <button type="submit" className="header-submit-button">
                 <MdSearch size={21} className="header-icon" />
               </button>
            </form>
         </div>
      </header>
   );
};
