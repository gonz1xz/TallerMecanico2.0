import axios from "./axios";

export const getAppointmentsRequest = () => axios.get('/appointments')
export const getAppointmentRequest = (id) => axios.get(`/appointments/${id}`)
export const createAppointmentRequest = (appointment) => axios.post('/appointments', appointment)
export const updateAppointmentRequest = (id, appointment) => axios.put(`/appointments/${id}`, appointment)
export const deleteAppointmentRequest = (id) => axios.delete(`/appointments/${id}`)
