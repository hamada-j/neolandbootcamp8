const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos', (err, rows) => {
            if (err) reject(err)
            resolve(rows);
        });
    });
};

const getById = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from alumnos where id = ?', [pAlumnoId], (err, rows) => {
            if (err) reject(err);
            if (rows.length === 0) {
                resolve(null);
            }
            resolve(rows[0]);
        })
    });
};

const create = ({ nombre, apellidos, edad, email, matricula }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into alumnos (nombre, apellidos, email, edad, fecha_matricula, matricula) values (?, ?, ?, ?, ?, ?)',
            [nombre, apellidos, email, edad, new Date(), matricula],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    });
}

const deleteById = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from alumnos where id = ?', [pAlumnoId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    create: create,
    deleteById: deleteById
}
