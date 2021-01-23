const router = require("express").Router();
const Data = require("../model/dataModel");

router.post("/post-data", async (req, res) => {
    
    let { content, date, title  } = req.body;

    const newData = new Data({
        title,
        content,
        date,
      });
    const savedData = await newData.save();
    res.json(savedData);
  });

  router.get("/get-data", async (req, res) => { 
    Data.find({}).then(function (datas) {
        res.send(datas);
});
});
module.exports = router;
