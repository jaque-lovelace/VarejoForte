let adminAuthenticate = function adminAuthenticate(req, res, next) {

    req.session.user = { name: 'AdminTest', type: 'admin' };
    
    if (req.session.user != undefined) {
        if (req.session.user.type == 'admin') {
            next();
        } else {
            res.redirect('/admin/login');
        }
    } else {
        res.redirect('/admin/login');
    }
  
     
     next();
}


module.exports = adminAuthenticate;