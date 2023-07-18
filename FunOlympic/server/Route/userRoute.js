const {
    register,
    login,
    verify,
    authenticateToken,
    userById,
    getAllUser,
    disableOrEnableUserById,
    changePassword,
    forgotPassword,
    resetPassword
} = require('./../Controller/userController');
const { contact, getMessage } = require('./../Controller/contactController');
const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.post('/contact-us', contact);
router.get('/message', getMessage);
router.get('/verify/:token', verify);
router.get('/profile', authenticateToken, userById);
router.get('/getall', getAllUser);
router.put('/disableorenable/:id', disableOrEnableUserById);
router.post('/changepassword', changePassword);
router.post('/forgotpassword', forgotPassword);
router.get('/resetpassword/:token', resetPassword);

module.exports = router;
