const router = require("express").Router();
const Journal = require("../models/journalentry.js")

router.get("/", async (req,res) => {
    const id = req.user._id;
    const entry = await Journal.findAll({
        where: {userId: id}
    });
    res.json(entry);
});

router.post("/addentry", async (req,res) => {
    const id = req.user._id;
    const {title, entry, date} = req.body;
    const journal = new Journal({ title, entry, date, userId: id});
    await journal.save();
})

router.put("/:id", req,res => {
    
})

router.delete("/:id", req,res => {

})