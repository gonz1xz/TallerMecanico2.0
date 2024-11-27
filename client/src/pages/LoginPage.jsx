import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react"

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { signin, errors: signinErrors, isAuthenticated } = useAuth()

    const navigate = useNavigate()

    
    const onSubmit = handleSubmit(data => {
        signin(data)
    })
    
    useEffect(() => {
        if (isAuthenticated) navigate('/appointments')
    }, [isAuthenticated])

    
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

                <h1 className="text-4xl text-center">Taller Mecanico</h1>
                <h2 className="text-2xl font-bold text-center m-2">Inicio de Sesion</h2>

                {
                    signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i} >
                            {error}
                        </div>
                    ))
                }

                <form onSubmit={onSubmit}>


                    <input type="email" name="email"   {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Ingresa su email"
                    />

                    {
                        errors.email && (
                            <p className="text-red-500">Email is required</p>
                        )
                    }

                    <input type="password" name="password"  {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Ingresa su password"
                    />

                    {
                        errors.password && (
                            <p className="text-red-500">Password is required</p>
                        )
                    }

                    <button type="submit" className="bg-slate-500 rounded-md p-2 mt-2 mb-2">
                        Ingresar
                    </button>
                </form>

                <p className="flex gap-x-1 justify-between">
                    No tienes una cuenta aun?
                    <Link to="/register" className="text-sky-300">Registrate</Link>
                </p>

            </div>
        </div>
    )

}
export default LoginPage


