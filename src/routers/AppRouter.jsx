import { Route, Routes } from "react-router-dom";
import { Routers } from "./Routers";


export const AppRouter = () => {
  return (
    <Routes>
            <Route path="/*" element={ <Routers /> } />
    </Routes>
  )
}
