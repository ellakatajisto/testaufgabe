const homeController = require('./controllers/homeController'),
    submissionController = require('./controllers/submissionController'),
    emailController = require('./controllers/emailController');
    
var router = require('express').Router(); 

router.get('/', homeController.showIndex);
router.get('/thanks', homeController.showThanks);
router.get('/error', homeController.showError);

router.post('/saveAndSend', emailController.sendEMail, submissionController.saveSubmission);

router.get("/submissions", submissionController.getAllSubmissions, (req, res) => { 
    console.log(req.data); 
    res.send(req.data);
  });

module.exports = router;