const express = require("express")
const { getStatistics , updateStatistic} = require("../controllers/stats/stats")
const StatsRouter = express.Router()
const auth = require('../middlewares/auth');

StatsRouter.put("/:id" , auth , updateStatistic )
StatsRouter.get("/" , getStatistics )

module.exports = StatsRouter