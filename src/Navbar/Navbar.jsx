
import style from "./Navbar.module.css"
import { HashLink as Link } from 'react-router-hash-link';









export default function Navbar(){



    return <>
    
    <nav className= { ` ${style.navbar}  fixed-top  navbar navbar-expand-lg py-4`}>
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bold" to='#home'>START REACT</Link>
    
    <button className= {` ${style.navIcon}   navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <span className="navbar-toggler-icon"></span>
    
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className={   `  ${style.navLink}   nav-link text-white fs-5 mx-2 fw-bold`     }  to='#portfolio'>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className={   `  ${style.navLink}   nav-link text-white fs-5 mx-2 fw-bold`     } to='#about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className={   `  ${style.navLink}   nav-link text-white fs-5 mx-2 fw-bold`     } to='#contact'>Contact</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
    </>
}