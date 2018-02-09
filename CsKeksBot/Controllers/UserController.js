"use strict";

var UserController = function(db) {
    this.db = db;
};

UserController.prototype.isFirstTimeUser= function(usr) {
    //TODO: check user table for this username return id, else -1
    this.db.find({ username: usr }, function (err, result) {
        console.log(JSON.stringify(result))
    });
};

UserController.prototype.addBotUser= function(user, nEmail, nRole) {
    this.db.insert({ username: user, email: nEmail, role: nRole })
};

module.exports = UserController;

