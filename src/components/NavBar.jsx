import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
            <NavLink to="/inicio">
                <a className="navbar-brand" href="#"><img height="40px" src="https://i.im.ge/2022/11/09/SQfzp8.logo-chico.png" alt="logo de la empresa" /></a>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                    <NavLink
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/nosotros"
                    >
                        Quiénes Somos
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/productos"
                    >
                        Productos
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}
