let router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');

router.post('/register', [
    check('username', 'El nombre de usuario debe estar entre 3 y 15 caracteres').isLength({ min: 3, max: 15 }).isAlphanumeric(),
    check('email', 'El email bien puesto').isEmail(),
    check('password', 'La password con digitos y movidas').custom((value) => {
        return (/^(?=.*\d).{4,8}$/).test(value);
    })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }

    const passwordEnc = bcrypt.hashSync(req.body.password, 10);
    req.body.password = passwordEnc;
    const result = await User.create(req.body);
    res.json(result);
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.emailExists(req.body.email);
        if (!user) {
            return res.json({ error: 'Error en email y/o password' });
        }
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: 'Error en email y/o password' });
        }
    } catch (err) {
        console.log(err);
    }

});

const createToken = (pUser) => {
    const payload = {
        usuarioId: pUser.id,
        fechaCreacion: moment().unix(),
        fechaExpiracion: moment().add(15, 'minutes').unix()
    }

    return jwt.encode(payload, process.env.SECRET_KEY);
};

module.exports = router;