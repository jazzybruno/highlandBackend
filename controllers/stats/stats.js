const express = require("express")
const Joi = require("joi")
const { Stats } = require("../../models/statistics")


const updateStatistic = async (req , res)=>{
    const id = req.params.id
    const data = {
        teachers : req.body.teachers,
        graduates : req.body.graduates,
        buildings : req.body.buildings,
        OfficeLocation : req.body.OfficeLocation,
        students : req.body.students
    }

    const {error} = validateStatistic(data)
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    try {
        const statistic = await Stats.findById(id)
        if(!statistic){
            return res.status(200).json({
                message: "No Achievmenst with this id was found"
            })
        }

        statistic.teachers = data.teachers
        statistic.graduates = data.graduates
        statistic.buildings = data.buildings
        statistic.OfficeLocation = data.OfficeLocation
        statistic.students = data.students

        try {
    
            await statistic.save()
            res.status(200).json({
                message: 'Statistics updated successfully'
            });
            
        } catch (error) {
            res.status(500).json({
                message: 'Error while creating contact',
                error: error.message
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'Error while creating contact',
            error: error.message
        })
    }
}

const getStatistics = async (req , res) => {
    try {
        const statistics = await Stats.find()
        if(!statistics){
            return res.status(200).json({
                message : "There are no statistics"
            })

            res.status(200).json({
                message: "Successfully Retrieved Statistics",
                statistics: statistics
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error while creating contact',
            error: error.message
        })
    }
}

const validateStatistic = (data)=> {
    const schema = Joi.object({
        teachers : Joi.number().required(),
        graduates : Joi.number().required(),
        buildings : Joi.number().required(),
        OfficeLocation : Joi.number().required(),
        students : Joi.number().required()
    })
    return schema.validate(data)
}

module.exports.updateStatistic = updateStatistic
module.exports.getStatistics = getStatistics