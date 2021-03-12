import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Zharatos games</h1>
      <div className="break"></div>
      <a className="cabe" href="Home">Home</a>
      <a className="cabe" href="">Lançamentos</a>
      <a className="cabe" href="">Noticias</a>
      <a className="cabe" href="">Listas</a>
      <a className="cabe" href="">Dicas</a>
      <a className="cabe" href="">Tutoriais</a>
      <a className="cabe" href="">Proximos lançamentos</a>
      <a className="cabe" href="">review</a>
    </header>
  );
}

export default Header;
