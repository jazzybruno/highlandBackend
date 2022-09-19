const express = require("express")
const { getStatistics , updateStatistic} = require("../controllers/stats/stats")
const StatsRouter = express.Router()

StatsRouter.put("/:id" , updateStatistic )
StatsRouter.get("/" , getStatistics )

module.exports = StatsRouter