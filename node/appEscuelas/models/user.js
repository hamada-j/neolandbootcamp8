const create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (username, email, password) values(?, ?, ?)', [username, email, password], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
};

const emailExists = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) return reject(err);
            if (rows.length === 0) return resolve(null);
            resolve(rows[0]);
        })
    });
};

module.exports = {
    create: create,
    emailExists: emailExists
}
