// function act as a normal request callback function
// checking for the existence of a session property and using res.redirect()
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;