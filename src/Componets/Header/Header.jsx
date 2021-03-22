import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1> Zharatos games </h1>
      <div className="break"></div>
      <a className="cabe" href="https://zharatosgames.com/">Home</a>
      <a className="cabe" href="lançamentos">Lançamentos</a>
      <a className="cabe" href="https://zharatosgames.com/Proximos lançamentos/">Proximos lançamentos</a>
      <a className="cabe" href="https://zharatosgames.com/Noticias/">Noticias</a>
      <a className="cabe" href="https://zharatosgames.com/Listas">Listas</a>
      <a className="cabe" href="https://zharatosgames.com/Listas/Dicas">Dicas</a>
      <a className="cabe" href="https://zharatosgames.com/Review/">Review</a>
      <a className="cabe" href="https://zharatosgames.com/Historias/">Historias</a>
    </header>
  );
}

export default Header;

