const router = require("express").Router();
const Journal = require("../models/journalentry.js")

router.get("/", async (req,res) => {
    // const id = req.session._id;
    const id = req.session.user._id;
    const entry = await Journal.find({
        // where: {userId: id}
        userId: id
    });
    res.json(entry);
});

router.post("/", async (req,res) => {
    const id = req.session.user._id;
    const {title, entry, date} = req.body;
    console.log(id);
    const journal = new Journal({ title: title, entry: entry, date: date, userId: id});
    await journal.save()
    .then((newPost) => {
        res.status(201).json(newPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
})

router.put("/:id", (req,res) => {
    const entryId = req.params.id;
    const journal = Journal.findOneAndUpdate({
        _id: entryId
    })
})

router.delete("/:id", (req,res) => {
    const entryId = req.params.id;

    Journal.deleteOne({
        _id: entryId,
    })
})

module.exports = router;