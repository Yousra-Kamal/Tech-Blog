const router = require("express").Router();

router.get("/", async (req, res) => {
  // should includes existing blog posts if any have been posted
  // blog posts model
  //serialize data
  //pass the serialize data to the  template so it can be rendered
  //res.render('homepage', serializedData)
});

module.exports = router;
