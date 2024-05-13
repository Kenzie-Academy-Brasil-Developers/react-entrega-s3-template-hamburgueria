import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "./Header.scss"; // Importando o arquivo SCSS

export const Header = ({ cartItemCount, openCartModal }) => {
   const [searchValue, setSearchValue] = useState("");

   return (
      <header className="header">
         <img src={Logo} alt="Logo Kenzie Burguer" className="logo" />
         <div className="header-content">
            <button className="header-button" onClick={openCartModal}>
                <MdShoppingCart size={21} className="header-icon" />
                <span className="header-cart-counter">{cartItemCount}</span>
            </button>
            <form className="header-form" onSubmit={(e) => e.preventDefault()}>
               <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Pesquisar..."
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
