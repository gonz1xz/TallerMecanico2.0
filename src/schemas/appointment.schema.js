import { z } from 'zod'

export const createAppointmentSchema = z.object({
    clientName: z.string({
        required_error: 'clientName is required'
    }).min(3, {
        message: 'Invalid name'
    }),
    clientCar: z.string({
        required_error: 'clientCar is required'
    }).min(3, {
        message: 'Invalid client car'
    }),
    description: z.string({
        required_error: 'Description must be a string'
    }).min(10, {
        message: 'Invalid description'
    }),
    numberPlate: z.string({
        required_error: 'Number Plate is required'
    }).min(6, {
        message: 'Invalid number plate'
    }),
    date: z.string().datetime().optional(),
    done: z.boolean().optional()

})