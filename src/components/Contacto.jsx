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