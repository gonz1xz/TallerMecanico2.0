import { useForm } from 'react-hook-form'
import { useAppointment } from '../context/AppointmentsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function AppointmentsFormPage() {

    const { register, handleSubmit, setValue } = useForm()
    const { createAppointment, getAppointment, updateAppointment } = useAppointment()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadAppointment(){
            if(params.id){
                const appointment = await getAppointment(params.id)
                console.log(appointment)
                setValue('clientName', appointment.clientName)
                setValue('clientCar', appointment.clientCar)
                setValue('numberPlate', appointment.numberPlate)
                setValue('description', appointment.description)
            }

        }

        loadAppointment()
    }, [])

    const onSubmit = handleSubmit((data) => {

        if(params.id){
            updateAppointment(params.id, data)
        }else{
            createAppointment(data)
        }

        navigate('/appointments')
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                <h1 className="text-2xl font-bold text-center">Datos de Cita</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="clientName"
                        {...register('clientName')}
                        placeholder='Ingrese nombre del cliente'
                        autoFocus
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    />
                    <input
                        type="text"
                        name="clientCar"
                        {...register('clientCar')}
                        placeholder='Ingrese modelo de auto'
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    />
                    <input
                        type="text"
                        name="numberPlate"
                        {...register('numberPlate')}
                        placeholder='Ingrese patente'
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    />
                    <textarea
                        rows="3"
                        name="description"
                        {...register('description')}
                        placeholder='Trabajo a realizar....'
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    >
                    </textarea>

                    <button  className="bg-slate-500 rounded-md p-2 mt-2 mb-2">Agendar</button>
                </form>
            </div>
        </div>
    )
}

export default AppointmentsFormPage