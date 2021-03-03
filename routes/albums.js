var express = require('express');
var router = express.Router();

let albumCtrl = require('../controllers/albums')


router.get('/', albumCtrl.index);
router.get('/:albumid', albumCtrl.show)
router.get('/:albumid/:trackid', albumCtrl.showtracks)

module.exports = router;
