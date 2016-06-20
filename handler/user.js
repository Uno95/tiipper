
var	Kupon = require('../models/kupon');
var	Menu = require('../models/menu');
var handler, props, i;
var items = [], items2 = []; 


//show landing page
home = function(req, res){
	Kupon.find({}, function(err, kupon) {
		if (err) {throw err};
		//console.log(kupon);
		for (i = 0; i<kupon.length; i++){
			items.push(kupon[i]);
		}
	});

	Menu.find({}, function(err, menu) {
		if (err) {throw err};
		//console.log(kupon);
		for (i = 0; i<menu.length; i++){
			items2.push(menu[i]);
		}
	});

	//console.log(items2);

	res.render('./user/home.html', {
		dataKupon: items,
		dataCafe: items2
	});
};

//show form sign up for company
form = function(req, res){
	res.render('./user/form.html');
};

//show form sign up for user
formsign = function(req, res){
	res.render('./user/formsign.html');
};


//show form sign in for user
login = function(req, res){
	res.render('./user/login.html');
};

//registers success
berhasilregister = function(req, res){
	res.render('./user/registerberhasil.html');
};

//show search result page
hasilpencarian = function(req, res) {
	res.render('./user/hasilpencarian.html',
		{
			name: req.params.name
		}
	);
};

userpage = function (req, res) {
	res.render('./user/mainProfil.html',
		{
			name: req.params.username
		}
	);
};

placeDetail = function(req, res) {
	res.render('./user/placeDetail.html',
		{
			name: req.params.name,
			id: req.params.id
		}
	);
};

handler = {
	home: home,
	form: form,
	placeDetail: placeDetail,
    formsign: formsign,
    userpage: userpage,
    login: login,
    berhasilregister: berhasilregister,
    hasilpencarian: hasilpencarian
};

module.exports = handler;
