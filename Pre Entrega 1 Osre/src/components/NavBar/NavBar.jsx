import React from "react";
import './NavBar.css';
import CardWidget from "../CartWidget/CartWidget";
import Lazaro from '../../img/lazaro2.jpg'; 

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="menu">
        <img className="imagen-lazaro" src={Lazaro} alt="El Jefaso" />
        <h1 className="titulo-menu">Concesionaria Lázaro "B"</h1>
            <ul className="lista-menu">
                <li className="item-menu"><a className="linkMenu" href="#">Nosotros</a></li>
                <li className="item-menu"><a className="linkMenu" href="#">Vehículos</a></li>
                <li className="item-menu"><a className="linkMenu" href="#">Promociones</a></li>
                <li className="item-menu"><a className="linkMenu" href="#">Contacto</a></li>
            </ul>
            <div className="contenedor-cartw">
            <CardWidget />
            </div>  
        </nav>
      </div>
    </>
  );
};

export default NavBar;
