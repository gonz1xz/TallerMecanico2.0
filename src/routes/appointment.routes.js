import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getAppointments, getAppointment, createAppointment, deleteAppointments, updateAppointments } from '../controllers/appointment.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createAppointmentSchema } from '../schemas/appointment.schema.js'

const router = Router()


router.get('/appointments', authRequired, getAppointments)
router.get('/appointments/:id', authRequired, getAppointment)
router.post('/appointments', authRequired, validateSchema(createAppointmentSchema), createAppointment)
router.delete('/appointments/:id', authRequired, deleteAppointments)
router.put('/appointments/:id', authRequired, updateAppointments)




export default router