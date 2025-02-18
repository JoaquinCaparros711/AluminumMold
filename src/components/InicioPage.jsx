import 'animate.css';
import { NavLink } from 'react-router-dom';
import bannerMaquina from '../images/bannerMaquina.jpg';
import hembra from '../images/hembra.jpg';
import macho from '../images/macho.jpg';
import estrella from '../images/estrella.png';
import herramientas from '../images/herramientas.png';
import Dinero from '../images/Dinero.png';






export const InicioPage = () => {
  return (
    <div>
      <div className="container-inicio">

        <h2>Somos una asociación de estudiantes</h2>
        <p>Especializados en electromecánica y en la realización de máquinas industriales.
        <br /> Ya que contamos con las suficientes facultades y experiencias para poder realizar <br /> este tipo de proyectos y 
        trabajos tanto con la parte de diseño, mecánica, eléctrica, neumática.
        </p>

        <NavLink to="/nosotros">
          <button className="btn1" data-aos="fade-right" data-aos-duration="2000">Sobre nosotros</button>
        </NavLink>
        <NavLink to="/productos">
          <button className="btn2" data-aos="fade-left" data-aos-duration="2000">Ver productos</button>
        </NavLink>
        

      </div>

      <div className='container-productos-destacados'>

        <h1 className='titulo-productos'>Productos destacados</h1>

        <div className='container-cards'>

          <div className="card-productos" data-aos="fade-down" data-aos-duration="2000">

            <img height="400px" src={bannerMaquina} alt="" />

            <h2>Moldeadora</h2>

          </div>

          <div className="card-productos" data-aos="fade-up" data-aos-duration="2000">

            <img height="400px" src={macho} alt="" />

            <h2>Matriz(macho)</h2>

          </div>

          <div className="card-productos" data-aos="fade-down" data-aos-duration="2000"> 

            <img height="400px" src={hembra} alt="" />

            <h2>Matriz(hembra)</h2>   

          </div>

        </div>

        <NavLink to="/productos">
          <button className="btn1 btn3" data-aos="fade-right" data-aos-duration="2000">Ver todos los productos</button>
        </NavLink>


      </div>

      <div className="container-sobre-nosotros">

        <h1 className='titulo-sobre-nosotros'>Sobre nosotros</h1>
        <p>Fabricacion de equipos de máxima calidad</p>

        <div className="card-sobre-nosotros">

          <div className="card-productos">

            <img data-aos="fade-down" data-aos-duration="2000" height="100px" src={estrella} alt="" />
            <h1>Calidad Precio</h1> 
            <p>
              Ofrecemos equipos de alta <br /> calidad
              a un costo  totalmente accesible.
            </p>

          </div>

          <div className="card-productos">
            
            <img data-aos="fade-down" data-aos-duration="2000" height="100px" src={herramientas} alt="" />
            <h1>Servicio y Garantía</h1> 
            <p>Personalizado servicio post-venta, <br /> garantía de fabricación, disponibilidad de repuestos.</p>

          </div>

          <div className="card-productos">

            <img data-aos="fade-down" data-aos-duration="2000" height="100px" src={Dinero} alt="" />
            <h1>Beneficios</h1> 
            <p>Óptima relación costo/beneficio. <br />
              Larga vida útil. Nuestros productos <br />
              se convertirán en un aliado estratégico <br />
              de su proceso, permitiéndole alcanzar <br />
              las prestaciones que necesita.
            </p>

          </div>

        </div>

        <button className="btn1 btn4" data-aos="fade-right" data-aos-duration="2000">Leer Más</button>

      </div>


    </div>
  )
}

