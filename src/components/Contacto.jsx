import { useForm, ValidationError } from "@formspree/react";


export const Contacto = () => {

  const [state, handleSubmit] = useForm("mrgdjkpv");

  return (
    <form 
      id="form"
      className="form"   
      onSubmit={handleSubmit}
    >

      <h2 className="">Contáctese con Nosotros</h2>

      {/* <div className="lista-contacto">

        <div>
          <i className='bx bx-envelope'></i>
          <p>joaquincaparros711@gmail.com</p>
        </div>

        <div>
          <i className='bx bx-location-plus'></i>
          <p>San Rafael-Mza</p>
        </div>

        <div>
          <i className='bx bx-phone'></i>
          <p>2604409752</p>
        </div>

      </div>

      <div className="lista-redes">

        <a href="https://instagram.com/joaquincaparross?igshid=YmMyMTA2M2Y="><i className='bx bxl-instagram animate__animated animate__fadeInDown'></i></a>
        <a href="https://twitter.com/joaco515?s=11&t=_Tb7lR5QnrrNkep9yc9kxw"><i className='bx bxl-twitter animate__animated animate__fadeInDown' ></i></a>
        <a href="https://www.linkedin.com/in/joaquin-caparros-0399a6239"><i className='bx bxl-linkedin-square animate__animated animate__fadeInDown' ></i></a>

      </div>

      <div className="form-container">

        <h1>CONTACTO</h1>

        <input 
          type="text" 
          className="form-input" 
          placeholder="Nombre" 
          name="name"
        />

        <input 
          type="email" 
          className="form-input" 
          placeholder="Correo electrónico" 
          name="email"
        />
          <ValidationError
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <textarea 
          className="form-input mensaje" 
          placeholder="Mensaje" 
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <input type="submit" value="Enviar" className="form-cta" disabled={state.submitting} />

      </div> */}

      <div className="container-fluid form-container">

        <h1>Contacto</h1>

        <h4>Contáctese con Nosotros</h4>
        <p>Preguntas, opiniones y comentarios son bienvenidos.</p>
        
          <input 
            type="text" 
            className="form-input" 
            placeholder="Nombre" 
            name="name"
          />

          <input 
            type="email" 
            className="form-input" 
            placeholder="Correo electrónico" 
            name="email"
          />
            <ValidationError
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <textarea 
            className="form-input mensaje" 
            placeholder="Mensaje" 
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <input data-aos="fade-right" data-aos-duration="2000" type="submit" value="Contactarme" className="form-cta" disabled={state.submitting} />
        

      </div>

    </form>
  )

}