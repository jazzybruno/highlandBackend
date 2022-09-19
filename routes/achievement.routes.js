const express = require("express")
const { getAchievementById , getAchievements , postAchievement , updateAchievement , deleteAchievement } = require("../controllers/achieve/achieve")
const AchievementRouter = express.Router()

AchievementRouter.post("/" , postAchievement)
AchievementRouter.get("/" , getAchievements)
AchievementRouter.get("/:id" , getAchievementById)
AchievementRouter.get("/:id" , getAchievementById)
AchievementRouter.put("/:id" , updateAchievement)
AchievementRouter.delete("/:id" , deleteAchievement)

module.exports = AchievementRouter