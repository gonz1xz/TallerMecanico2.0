import Appointment from "../models/appointment.model.js"

export const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({
        user: req.user.id
    }).populate('user')
    res.json(appointments)
}

export const getAppointment = async (req, res) => {
    const appointmentFound = await Appointment.findById(req.params.id).populate('user')
    if(!appointmentFound) return res.status(404).json({message: "Appointment not found"})
    res.json(appointmentFound)  
}


export const createAppointment = async (req, res) => {
    const { clientName, clientCar, description, numberPlate, date, done } = req.body

    const newAppointment = new Appointment({
        clientName,
        clientCar,
        description,
        numberPlate,
        date,
        done,
        user: req.user.id
    })

    const savedAppointment = await newAppointment.save()

    res.json(savedAppointment)
}

export const updateAppointments = async (req, res) => {
    const appointmentFound = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    if (!appointmentFound) return res.status(404).json({ message: "Appointment not found" })
    res.json(appointmentFound)
}

export const deleteAppointments = async (req, res) => {
    const appointmentFound = await Appointment.findByIdAndDelete(req.params.id)
    if (!appointmentFound) return res.status(404).json({ message: "Appointment not found" })
    return res.sendStatus(204)
}