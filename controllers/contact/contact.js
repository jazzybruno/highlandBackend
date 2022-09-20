const express = require('express');
const {Contact} = require('../../models/contact');
const Joi = require('joi')

const PostContact = async(req , res) =>{
    const contactData = {
        name : req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    const {error} = validation(contactData);
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    const contact = new Contact(contactData);
    try {
        
         await contact.save();
        res.status(200).json({
            message: 'Contact saved successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error while creating contact',
            error: error.message
        })
    }
        
    }
    
const GetContacts = async (req , res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({
            message: 'Error while fetching contacts',
            error: error.message
        })
    }
}


const DeleteContact = async (req ,res) =>{
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Contact deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error while deleting contact',
            error: error.message
        })
    }
}

const GetContactById = async (req , res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({
            message: 'Error while fetching contact',
            error: error.message
        })
    }
}

const validation = (contact)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().min(10).required(),
        email: Joi.string().email().required(),
        subject: Joi.string().required(),
        message: Joi.string().required()
    })
    return schema.validate(contact);
}


module.exports.PostContact = PostContact;
module.exports.GetContacts = GetContacts;
module.exports.DeleteContact = DeleteContact;
module.exports.GetContactById = GetContactById;
