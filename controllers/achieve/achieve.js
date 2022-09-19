const express = require('express')
const { Achievement } = require('../../models/achievement')

const getAchievements = async(req , res) => {
     try {
        const achievements = await Achievement.find()

        if(achievements.length === 0){
          return  res.status(200).json({
            message : "There are no achievements currently"
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
           message : `There are no achievement with this id : ${id} `
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

const postAchievement = async ()=> {

 


}

