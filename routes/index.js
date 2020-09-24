const express = require('express');
const router = express.Router();
router.use(express.urlencoded());
// require controller
const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

// get the home page
router.get('/',homeController.home);
// collect form data 
router.post('/add-new-task',homeController.addNewTask);
// delete task
router.get('/delete-task/',homeController.delete);
module.exports = router;