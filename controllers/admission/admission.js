const express = require('express');
const {Admission} = require('../../models/admission')
const  cloudinary  =  require('../../middlewares/cludinary');

const newAdmission = async (req , res)=>{

    const uploader = async (path) => await cloudinary.uploads(path , 'images');

    let url
    const file = req.file;
    if(file === undefined){
        res.status(400).json({
            message : 'No file uploaded'
        })
    }else{
        const {path} = file;
        const newPath = await uploader(path);
        url = newPath;
    }

    const data = {
       studentPhoto: url.url,
       ...req.body
    }

    const admission = new Admission(data)
    try {
        await admission.save()
        res.status(201).json({
            message: 'Admission created successfully'
        })

    } catch (error) {
        if(error){
            res.status(500).json({
                message: 'Error creating admission',
                error : error.message
            })
        }
    }

}

const getAdmissions = async (req , res)=>{
    try {
        const admissions = await Admission.find()
        res.status(200).json(admissions)
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching admissions',
            error : error.message
        })
    }
}

const getAdmissionById = async (req , res)=>{
    const id = req.params.id
    try {
        const admissions = await Admission.findById(id)
        res.status(200).json(admissions)
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching admissions',
            error : error.message
        })
    }
}


module.exports.getAdmissionById = getAdmissionById
module.exports.getAdmissions = getAdmissions
module.exports.newAdmission = newAdmission
