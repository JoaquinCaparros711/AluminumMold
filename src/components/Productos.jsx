import bannerMaquina from '../images/bannerMaquina.jpg';



import React from 'react'

export const Productos = () => {
  return (
    <div className='container-fluid container-productos'>

      <h1>Productos</h1>

      <div className="row container-carousel">

        <div className="col-6 container-carousel-todo">

          <h2 className='titulo-producto'>Moldeadora</h2>

          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-aos="fade-right" data-aos-duration="2000">
                <img src={bannerMaquina} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={bannerMaquina} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={bannerMaquina} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

      </div>

        <div className="col-6 texto-producto1">

          <h2 className='titulos-productos'>Moldeadora de aluminio</h2>
          <p>En el mercado al que nos orientamos se
            encuentran diversas máquinas <br /> capaces de
            realizar moldes de aluminio, pero nosotros 
            mediante el diseño <br /> y estudio hemos desarrollado
            la nuestra propia y tenemos bases sólidas <br /> para decir
            que es una máquina más eficiente, hemos procurado
            la calidad, <br /> la seguridad y el ahorro de tiempo como
            así también el de dinero. <br />
             La máquina tiene la función de realizar
            moldes de aluminio descartables <br /> para la gastronomía</p>
          
        </div>

      </div>

      <div className="row container-carousel">
        
        <div className="col-6 texto-producto">

          <h2 className='titulos-productos'>Matriz(macho)</h2>
          <p>La matriz(macho) tiene la función de cortar y moldear <br />
              una lámina de aluminio. Está hecha de acero de fundición <br />
              para mayor dureza y mejor calidad.
          </p>

      </div>

        <div className="col-6">

          <h2 className='titulo-producto titulo-producto2'>Matriz</h2>

          <img data-aos="fade-left" data-aos-duration="2000" className='img-macho' src={bannerMaquina} alt="" />
          
      </div>

    </div>

    <div className="row container-carousel">
        


      <div className="col-6 texto-producto">

          <h2 className='titulo-producto'>Matriz</h2>

          <img data-aos="fade-right" data-aos-duration="2000" className='img-macho' src={bannerMaquina} alt="" />
          
      </div>

      <div className="col-6">

        <h2 className='titulos-productos'>Matriz(hembra)</h2>
        <p>La matriz(hembra) tiene la función de moldear <br />
            una lámina de aluminio. Está hecha de acero de <br /> fundición 
            para mayor dureza, mejor calidad y <br /> mayor resistencia al impacto.
        </p>

      </div>

    </div>

      

      

    </div>
  )
}
