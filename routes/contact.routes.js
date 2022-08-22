const express = require('express')
const ContactRouter = express.Router()
const {PostContact} = require('../controllers/contact/contact')
const {GetContacts} = require('../controllers/contact/contact')
const {DeleteContact} = require('../controllers/contact/contact')
const {GetContactById} = require('../controllers/contact/contact')
const auth = require('../middlewares/auth')

ContactRouter.post('/' , PostContact);
ContactRouter.get('/' , auth , GetContacts);
ContactRouter.delete('/:id' , auth , DeleteContact);
ContactRouter.get('/:id' , auth , GetContactById);

module.exports = ContactRouter;