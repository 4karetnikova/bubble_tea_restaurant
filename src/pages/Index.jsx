import React from "react";

function Index() {
  return (
    <div className="first-container">
      <nav>
        <div className="nav-header">
          <div className="nav-image">
            <a href="#">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="menu-toggle-open" id="openMenuIcons">
            <span className="material-symbols-outlined"> menu </span>
          </div>
          <div className="menu-toggle-close" id="closeMenuIcons">
            <span className="material-symbols-outlined"> close </span>
          </div>
        </div>
        <ul className="nav-links" id="navLinks">
          <li>
            <a href="#">google</a>
          </li>
          <li>
            <a href="#">Pick-up Order</a>
          </li>
          <li>
            <a href="#">About SK</a>
          </li>
          <li>
            <a href="#">Unsere Story</a>
          </li>
        </ul>
      </nav>
      <div className="main-view">
        <div className="main-view__text-wrapper">
          <div className="main-view__headline">Bubbles by Sofiia</div>
          <div className="white-text">
            Ich bin Sofiia und das ist mein Bubble Tea Restaurant in Hannover.
            Mit dem Bubbles by Sofiia haben wir uns einen Wunsch erfüllt,
            Hannover einen Ort zu bieten an dem sich jeder geschätzt und
            willkommen fühlen soll. Daher stehen wir immer offen und ehrlich
            hinter unseren Produkten, Ideen und Taten.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
