


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
                <img src="https://i.im.ge/2022/11/12/SrXofJ.IMG-4570.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://i.im.ge/2022/11/12/SrXTPa.IMG-4569.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://i.im.ge/2022/11/12/SrXofJ.IMG-4570.jpg" className="d-block w-100" alt="..."/>
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
            encuentran diversas m??quinas <br /> capaces de
            realizar moldes de aluminio, pero nosotros 
            mediante el dise??o <br /> y estudio hemos desarrollado
            la nuestra propia y tenemos bases s??lidas <br /> para decir
            que es una m??quina m??s eficiente, hemos procurado
            la calidad, <br /> la seguridad y el ahorro de tiempo como
            as?? tambi??n el de dinero. <br />
             La m??quina tiene la funci??n de realizar
            moldes de aluminio descartables <br /> para la gastronom??a</p>
          
        </div>

      </div>

      <div className="row container-carousel">
        
        <div className="col-6 texto-producto">

          <h2 className='titulos-productos'>Matriz(macho)</h2>
          <p>La matriz(macho) tiene la funci??n de cortar y moldear <br />
              una l??mina de aluminio. Est?? hecha de acero de fundici??n <br />
              para mayor dureza y mejor calidad.
          </p>

      </div>

        <div className="col-6">

          <h2 className='titulo-producto titulo-producto2'>Matriz</h2>

          <img data-aos="fade-left" data-aos-duration="2000" className='img-macho' src="https://i.im.ge/2022/11/12/SrXTPa.IMG-4569.jpg" alt="" />
          
      </div>

    </div>

    <div className="row container-carousel">
        


      <div className="col-6 texto-producto">

          <h2 className='titulo-producto'>Matriz</h2>

          <img data-aos="fade-right" data-aos-duration="2000" className='img-macho' src="https://i.im.ge/2022/11/12/SrXTPa.IMG-4569.jpg" alt="" />
          
      </div>

      <div className="col-6">

        <h2 className='titulos-productos'>Matriz(hembra)</h2>
        <p>La matriz(hembra) tiene la funci??n de moldear <br />
            una l??mina de aluminio. Est?? hecha de acero de <br /> fundici??n 
            para mayor dureza, mejor calidad y <br /> mayor resistencia al impacto.
        </p>

      </div>

    </div>

      

      

    </div>
  )
}
