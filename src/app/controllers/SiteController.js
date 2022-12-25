const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        Course.find({}, function (err, course) {
            if (!err) res.json(course);
        });
    }

    search(req, res) {
        res.render('search');
    }

    error(req, res) {
        res.status(404).send('what???');
    }
}

module.exports = new SiteController();
