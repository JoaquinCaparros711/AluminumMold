import { Navigate, Route, Routes } from "react-router-dom";
import { Contacto, Footer, InicioPage, NavBar, Productos, QuienesSomos } from "../components";

export const Routers = () => {
  return (
    <>
        <NavBar />

        <div>
            <Routes>
                <Route path="inicio" element={<InicioPage />} />

                <Route path="productos" element={<Productos />} />

                <Route path="nosotros" element={<QuienesSomos />} />

                <Route path="contacto" element={<Contacto />} />

                <Route path="/*" element={<Navigate to="/inicio" />} /> 

            </Routes>
        </div>

        <Footer />

    </>
  )
}