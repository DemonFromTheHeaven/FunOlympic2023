const {
    addLive,
    getAllLive,
    getLivebyId,
    deleteLiveById,
    LiveUnLive
} = require("./../Controller/liveController");
const router = require("express").Router();

router.post("/add", addLive)
    .get("/get", getAllLive)
    .get("/get/:id", getLivebyId)
    .delete("/:id", deleteLiveById)
    .put('/liveunlive/:id', LiveUnLive);


module.exports = router;
