import { useAppointment } from "../context/AppointmentsContext";
import { Link } from "react-router-dom";

function AppointmentCard({ appointment}) {
    const formattedDate = new Date(appointment.date).toLocaleDateString()

    const { deleteAppointment }  = useAppointment()

    return (
        <div className="bg-zinc-800 max-w-md w-full p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-xl font-semibold text-white mb-2">Cliente: {appointment.clientName}</h1>
            <h2 className="text-lg text-zinc-300 mb-2">Auto: {appointment.clientCar}</h2>
            <h3 className="text-md text-zinc-400 mb-4">Patente: {appointment.numberPlate}</h3>
            <p className="text-zinc-300 mb-4">Fecha de cita: {formattedDate}</p>
            <p className="text-zinc-300 mb-4">Descripción: {appointment.description}</p>

            <div className="flex justify-between gap-2">
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => deleteAppointment(appointment._id)}
                    aria-label={`Eliminar cita de ${appointment.clientName}`}
                >
                    Eliminar
                </button>
                <Link
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    to={`${appointment._id}`}
                >
                    Editar
                </Link>
            </div>
        </div>
    );
}

export default AppointmentCard;
