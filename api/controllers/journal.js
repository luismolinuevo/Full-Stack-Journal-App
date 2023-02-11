const router = require("express").Router();
const Journal = require("../models/journalentry.js")

//get all entries for a user
router.get("/", async (req,res) => {
    // const id = req.session._id;
    const id = req.session.user._id;
    const entry = await Journal.find({
        // where: {userId: id}
        userId: id
    });
    res.status(200).json(entry);
});

//create entry
router.post("/", async (req,res) => {
    const id = req.session.user._id;
    const {title, entry, date, mood, moodExplained} = req.body;
    const journal = new Journal({ title: title, entry: entry, date: date, mood: mood, moodExplained: moodExplained, userId: id});
    await journal.save()
    .then((newPost) => {
        res.status(201).json(newPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
})

//edit entry
router.put("/:id", async (req,res) => {
    const entryId = req.params.id;
    const filter = {_id: entryId};
    const update = { title: req.body.title, entry: req.body.entry, date: req.body.date, mood: req.body.mood, moodExplained: req.boby.moodExplained }
    const journal = await Journal.findOneAndUpdate(filter, update , {
        new:true
    });
})

//delete entry
router.delete("/:id", async (req,res) => {
    const entryId = req.params.id;

    await Journal.deleteOne({
        _id: entryId,
    })
})

module.exports = router;