import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Encabezado from './Encabezado;'
import Contenido from './Contenido'
import imagen from "./Imagen"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Encabezado/>
    
    
    <div className='contenido'>
    <Contenido/>
      
    <main>

      <Imagen/>
        
        <h1 className=''>"GALERIA DE IMAGENES"</h1>
        <div className='img-enlaces'>
          
          <img src="" alt="img-2" />
          <img src="" alt="img-3" />
          <img src="" alt="img-4" />
          <img src="" alt="img-5" />
          <img src="" alt="img-6" />
          <img src="" alt="img-7" />
          <img src="" alt="img-8" />
          <img src="" alt="img-9" />
        </div>

      </main>
        

      <section>
          <h2>Titulo contenido</h2>
        </section>

        <section>
          <h2>Titulo contenido</h2>
        </section>

      

    </div>

  </StrictMode>,
)