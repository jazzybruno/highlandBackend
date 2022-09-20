const express = require("express")
const { getAchievementById , getAchievements , postAchievement , updateAchievement , deleteAchievement } = require("../controllers/achieve/achieve")
const AchievementRouter = express.Router()
const StatsRouter = express.Router()
const auth = require('../middlewares/auth');

AchievementRouter.post("/" , auth , postAchievement)
AchievementRouter.get("/" , getAchievements)
AchievementRouter.get("/:id" , getAchievementById)
AchievementRouter.put("/:id" , auth , updateAchievement)
AchievementRouter.delete("/:id" , auth , deleteAchievement)

module.exports = AchievementRouter