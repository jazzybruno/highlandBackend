const express = require('express')
const { Achievement } = require('../../models/achievement')
const Joi = require("joi")

const getAchievements = async(req , res) => {
     try {
        const achievements = await Achievement.find()

        if(achievements.length === 0){
          return  res.status(200).json({
            message : "There are no achievements currently",
            statistics: []
          })
        }else{
            return res.status(200).json({
                message: "Successfull retrieved the Acheivements",
                data: achievements
            })
        }
        
     } catch (error) {
        res.status(500).json({
            message: "Unable to get the Achievements"
        })
     }
}

const getAchievementById = async(req , res) => {
    const id = req.params.id
    try {
       const achievement = await Achievement.findById(id)

       if(!achievement){
         return  res.status(200).json({
           message : `There are no achievement with this id : ${id} `,
           data: {}
         })
       }else{
           return res.status(200).json({
               message: "Successfull retrieved the Acheivement",
               data: achievement
           })
       }
       
    } catch (error) {
       res.status(500).json({
           message: "Unable to get the Achievement"
       })
    }
}

const postAchievement = async(req , res)=> {

    const achieve = {
        title : req.query.title,
        desc: req.query.desc
    }   

    if(achieve.desc === undefined || achieve.title === undefined){
        return res.status(400).json({
            message: "Please fill all the fields"
        })
    }


    const {error} = validateAchievement(req.query)

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    const achievement = new Achievement(achieve)

    try {

        await achievement.save()
        res.status(200).json({
            message: 'Achievement saved successfully'
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Error while creating achievement',
            error: error.message
        })
    }
 

}

const updateAchievement = async (req , res)=> {

    const id = req.params.id

    try {

        const achievement = await Achievement.findById(id)

        if(!achievement){
            return res.status(200).json({
                message: "No Achievmenst with this id was found"
            })
        }

        const data = {
            title : req.body.title,
            desc: req.body.desc
        }
        const {error} = validateAchievement(data)
    
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        achievement.title = req.body.title
        achievement.desc = req.body.desc
    
    
        try {
    
            await achievement.save()
            res.status(200).json({
                message: 'Achievement updated successfully'
            });
            
        } catch (error) {
            res.status(500).json({
                message: 'Error while creating contact',
                error: error.message
            })
        }

        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        })
    }

}

const deleteAchievement = async (req , res)=> {
    const id = req.params.id

    try {

        const achievement = await Achievement.findByIdAndDelete(id)
        res.status(200).json({
            message: 'Achievement deleted successfully'
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Error while creating contact',
            error: error.message
        })
    }
}



function validateAchievement (achievement) {
    const schema = Joi.object({
        desc: Joi.string().required(),
        title: Joi.string().required()
        
    })
    return schema.validate(achievement)
}

module.exports.getAchievements = getAchievements
module.exports.postAchievement = postAchievement
module.exports.getAchievementById = getAchievementById
module.exports.updateAchievement = updateAchievement
module.exports.deleteAchievement = deleteAchievement