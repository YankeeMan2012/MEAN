var phrases = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello + ', ' + who.name);
};

exports.User = User;

console.log('User.js is required!');