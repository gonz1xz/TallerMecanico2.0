import { useForm } from "react-hook-form"
import { registerRequest } from "../api/auth"

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    return (
        <div className="bg-zinc-800 max-w-md  p-10 rounded-md">

            <form onSubmit={handleSubmit(async (values) => {
                console.log(values)
                const res = await registerRequest(values)
                console.log(res)
            })}>

                <input type="text" name="username"   {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Ingresa su usuario"
                />
                <input type="email" name="email"   {...register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Ingresa su email"
                />
                <input type="password" name="password"  {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Ingresa su password"
                />

                <button type="submit">
                    Registrarse
                </button>
            </form>


        </div>
    )

}

export default RegisterPage