import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerError } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/appointments')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-4xl text-center">Taller Mecanico</h1>
                <h2 className="text-2xl font-bold text-center m-2">Registro</h2>

                {
                    registerError.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i} >
                            {error}
                        </div>
                    ))
                }

                <form onSubmit={onSubmit}>

                    <input type="text" name="username"   {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Ingresa su usuario"
                    />

                    {
                        errors.username && (
                            <p className="text-red-500">Username is required</p>
                        )
                    }


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
                        Registrarse
                    </button>
                </form>

                <p className="flex gap-x-1 justify-between">
                    Ya tienes una cuenta?
                    <Link to="/login" className="text-sky-300">Ingresa</Link>
                </p>
            </div>
        </div>
    )

}

export default RegisterPage