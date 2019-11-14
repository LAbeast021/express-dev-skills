var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

/* GET /todos */
router.get('/',skillsCtrl.index)
/* GET /todos/some id */
router.get('/:id',skillsCtrl.show)


module.exports = router;
