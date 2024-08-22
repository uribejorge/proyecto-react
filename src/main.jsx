// Archivo: index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Encabezado from "./Encabezado";
import Contenido from "./Contenido";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Encabezado />
    <div className="contenido">
      <Contenido />
      <section>
        <article>
          <h2>Título de contenido</h2>
        </article>
        <article>
          <h2>Título de contenido</h2>
        </article>
      </section>
    </div>
  </StrictMode>
);