var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app, passport){
	r.get('/', h.home);
	r.get('/admin', h.admin);
	r.get('/profil', h.profil);
	r.get('/comment', h.comment);
	r.get('/ubahProfil', h.ubahProfil);
	r.get('/ubahPassword', h.ubahPassword);
	r.get('/mainProfil', h.mainProfil);
	r.get('/form', h.form);
	r.get('/formsign', h.formsign);
	r.get('/login', h.login);
	r.get('/berhasilregister', h.berhasilregister);
	r.get('/hasilpencarian/:name', h.hasilpencarian);
	r.get('/place/:name/:id', h.placeDetail);
	r.get('/beranda/:username', h.userpage);

	r.post('/newuser',passport.authenticate('local-signup', {
	    successRedirect : '/userpage', // redirect to the secure profile section
	    failureRedirect : '/formsign', // redirect back to the signup page if there is an error
	    failureFlash : true // allow flash messages
	}));

	r.post('/loginp',passport.authenticate('local-login', {
	    successRedirect : '/userpage', // redirect to the secure profile section
	    failureRedirect : '/login', // redirect back to the signup page if there is an error
	    failureFlash : true // allow flash messages
	}));

	app.use(r);
};
module.exports = router;

function isLoggedin(req,res,next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
