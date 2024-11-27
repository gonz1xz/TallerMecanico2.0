import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'><h1 className="text-2xl font-bold">Agenda de citas</h1></Link>
            <ul className="flex gap-x-2">
                {
                    isAuthenticated ? (
                        <>
                            <li>Bienvenido {user.username}!</li>
                            <li> <Link to='/add-appointments' className="bg-zinc-500 px-4 py-1 rounded-sm hover:bg-blue-200 transition">Agendar cita</Link> </li>
                            <li> <Link to='/appointments' className="bg-zinc-500 px-4 py-1 rounded-sm hover:bg-blue-200 transition">Citas</Link> </li>
                            <li> <Link to='/' onClick={() => {
                                logout()
                            }} className="bg-zinc-500 px-4 py-1 rounded-sm hover:bg-red-400 transition">Cerrar sesion</Link> </li>
                        </>
                    ) : (
                        <>
                            <li> <Link to='/login' className="bg-zinc-500 px-4 py-1 rounded-sm">Iniciar sesion</Link> </li>
                            <li> <Link to='/register' className="bg-zing-500 px-4 py-1 rounded-sm">Registro</Link> </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar