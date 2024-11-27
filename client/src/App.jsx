import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AppointmentsPage from "./pages/AppointmentsPage"
import AppointmentsFormPage from "./pages/AppointmentsFormPage"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/profilePage"
import ProtectedRoute from "./ProtectedRoute"
import { AppointmentProvider } from "./context/AppointmentsContext"
import Navbar from "./components/Navbar"


function App() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />} >
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/add-appointments" element={<AppointmentsFormPage />} />
                <Route path="/appointments/:id" element={<AppointmentsFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </AppointmentProvider>
    </AuthProvider>
  )
}

export default App