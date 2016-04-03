var zhihu = require('zhihu');
var fs = require('fs');
var username = 'phodal';

zhihu.User.getUserByName(username).then(function (user) {
    fs.writeFile('test_data/phodal/zhihu.json', JSON.stringify(user), function (err) {
        if (err) return console.log(err);
        console.log('Successful');
    });
}).error(function (error) {
    console.log(error);
});