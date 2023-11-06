const Submission = require('../models/submission');

// save new submission into mongoDB
exports.saveSubmission = (req, res) => {
    let newSubmission = new Submission({
        anrede: req.body.anrede,
        name: req.body.name,
        email: req.body.email,
        select: req.body.select,
        beschreibung: req.body.beschreibung,
        agreed: req.body.agreed
    });
    newSubmission.save(function(err){
        if(err){console.log(err);
        res.render('error');
        return
    } else {
        res.render('thanks');
        console.log(req.body);
    }
})
}, 

//for viewing submitted data in browser
exports.getAllSubmissions = (req, res, next) => {
    Submission.find( {}, (error, submissions) => {
   if (error) next(error);
  req.data = submissions;
  next();
}); 
}