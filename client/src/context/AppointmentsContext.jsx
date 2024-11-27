import { createContext, useContext, useState } from "react";
import { createAppointmentRequest, getAppointmentsRequest, deleteAppointmentRequest, updateAppointmentRequest, getAppointmentRequest } from "../api/appointment";

const AppointmentContext = createContext()

export const useAppointment = () => {
    const context = useContext(AppointmentContext)

    if (!context) {
        throw new Error('useAppointment must be used within a AppointmentProvider')
    }

    return context
}

export function AppointmentProvider({ children }) {

    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        const res = await getAppointmentsRequest()
        setAppointments(res.data)
    }

    const createAppointment = async (appointment) => {
        const res = await createAppointmentRequest(appointment)
        console.log(res)
    }

    const deleteAppointment = async (id) => {
        try {
            const res = await deleteAppointmentRequest(id)
            if (res.status == 204) setAppointments(appointments.filter(e => e._id != id))
        } catch (error) {
            console.log(error)
        }

    }

    const getAppointment = async (id) => {
        try {
            const res = await getAppointmentRequest(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateAppointment = async (id, appointment) => {
        try{
            await updateAppointmentRequest(id, appointment)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <AppointmentContext.Provider value={{
            appointments,
            createAppointment,
            getAppointments,
            deleteAppointment,
            getAppointment,
            updateAppointment
        }}>
            {children}
        </AppointmentContext.Provider>
    )
}