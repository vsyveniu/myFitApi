module.exports = {
    "up": "INSERT INTO users (user_id, name, email, password) VALUES ('1', 'vsyveniu', 'fuck@mail.com', '$2a$10$e1S.esgLRQ32Qh.yAr996uhOoctQrE5wPDMKCknEtTZMSZ0EfnRRe')",
    "down": "DELETE FROM users WHERE name = 'vsyveniu'"
}