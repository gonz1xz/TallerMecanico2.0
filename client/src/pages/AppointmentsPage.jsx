import { useEffect } from "react"
import { useAppointment } from "../context/AppointmentsContext"
import AppointmentCard from "../components/AppointmentCard"

function AppointmentsPage() {

    const { getAppointments, appointments } = useAppointment()

    useEffect(() => {
        getAppointments()
    }, [])

    if(appointments.length == 0) return (<h1>No hay citas!</h1>)


    return (
        <div className="grid grid-cols-3 gap-2">
            {
                appointments.map( (appointment) => (
                    <AppointmentCard key={appointment._id} appointment= {appointment} />
                ))
            }
        </div>
    )
}

export default AppointmentsPage