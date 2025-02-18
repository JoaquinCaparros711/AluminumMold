import logoCvv from '../images/logoCVV.png';


export const Footer = () => {
    return (
  
      <div className="container-footer-total">
  
          <h2 className="titulo-footer">Contáctenos</h2>
  
          <div className="container-footer">
  
              <div className="col-4">
                  <img height="100px" src={logoCvv} alt="" />
              </div>
  
              <div className="footer-contacto col-4">
  
                  <p>Bifani 905 <br /> San Rafael - Mendoza</p>
                  <p>+54 260 4409752</p>
                  <p>aluminumold@gmail.com</p>
  
              </div>
  
              <div className="iconos-footer col-4">
                  <a href="#"><i className='bx bxl-instagram'></i></a>
                  <a href="#"><i className='bx bxl-linkedin' ></i></a>
                  <a href="#"><i className='bx bxl-facebook-circle'></i></a>
              </div>
  
          </div>
  
  
      </div>
  
    )
  }
  