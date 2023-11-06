
exports.showIndex = (req, res) => {
    res.render('index.ejs');
};

exports.showThanks = (req, res) => {
    res.render('thanks.ejs')
};

exports.showError = (req, res) => {
    res.render('error.ejs');
};

