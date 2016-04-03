var zhihu = require('zhihu');

var username = 'phodal';
zhihu.User.getUserByName(username).then(function(user){
    console.log(user);
}).error(function(error){
	console.log(error);
})