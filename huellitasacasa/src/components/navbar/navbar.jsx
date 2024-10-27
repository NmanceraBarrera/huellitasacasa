import React from 'react'
import style from '../components/navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <nav className={style.navbar}>
        <img src="https://img.freepik.com/vector-premium/estilo-dibujo-linea-continua-cabeza-perro-cabeza-perro-dibujo-linea-diseno-minimalista_266639-2578.jpg" alt="Logo" />
        <ul>
          <li><a href="#">Perdidos</a></li>
          <li><a href="#">Encontrados</a></li>
          <li><a href="#">Fundaciones</a></li>
          <li><a href="#">Informaciones</a></li>
          <button>Registrarse</button>
          <button>Iniciar Sesion</button>
        </ul>
      </nav>
    </div>
  )
}
