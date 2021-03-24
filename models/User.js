const mysql = require('mysql2');
const db = require('../dbconnect');

class User {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    hello() {
        return 'surprise motherfucker';
    }

    save() {
        return new Promise((resolve, reject) => {
            db.execute(
                `INSERT INTO users(name, email, password) VALUES ('${this._name}', '${this._email}', '${this._password}')`,
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }

    static findByEmail(email) {
        return new Promise((resolve, reject) => {
            db.execute(
                `SELECT * FROM users WHERE email = '${email}'`,
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results[0]);
                    }
                }
            );
        });
    }

    static read() {
        return new Promise(function (resolve, reject) {
            db.query(
                'SELECT * FROM `users` WHERE `user_id` = 1 ',
                function (err, results, fields) {
                    console.log(results);
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }
}

module.exports = { User };
