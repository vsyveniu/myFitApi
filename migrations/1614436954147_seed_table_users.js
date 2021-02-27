module.exports = {
    "up": "INSERT INTO users (user_id, name, password) VALUES ('1','vsyveniu', '$2a$10$e1S.esgLRQ32Qh.yAr996uhOoctQrE5wPDMKCknEtTZMSZ0EfnRRe')",
    "down": "DELETE FROM users WHERE name = 'vsyveniu'"
}