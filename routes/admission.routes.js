const express = require('express')
const AdmissionRouter = express.Router()
const {newAdmission , getAdmissionById , getAdmissions } = require('../controllers/admission/admission')
const student = require('../middlewares/admission');
const auth = require('../middlewares/auth');


AdmissionRouter.post('/' , auth , student.single('image') , newAdmission);
AdmissionRouter.get('/' , auth , getAdmissions);
AdmissionRouter.get('/:id' , auth , getAdmissionById);

module.exports = AdmissionRouter;