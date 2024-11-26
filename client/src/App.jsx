import { BrowserRouter, Routes,  Route } from "react-router-dom"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1 className="text-4xl font-bold">Taller Mecanico</h1> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/appointment" element={ <h1 className="text-4xl font-bold">Citas</h1> } />
        <Route path="/add-appointment" element={ <h1 className="text-4xl font-bold">Agendar nueva cita</h1> } />
        <Route path="/appointment/:id" element={ <h1 className="text-4xl font-bold">Actualizar cita</h1> } />
        <Route path="/profile" element={ <h1 className="text-4xl font-bold">Perfil</h1> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App