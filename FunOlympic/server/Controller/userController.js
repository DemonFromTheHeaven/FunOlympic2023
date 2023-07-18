const User = require('./../Model/userModel');
const axios = require('axios');
const SECRET_KEY = process.env.SCRRETKEY;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const secretKey = 'dineshdaikosecretkey';

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'email id',
        pass: 'your email app password'
    }
});

const sendVerificationEmail = async (email, verificationToken) => {
    try {
        // Create the email content
        const mailOptions = {
            from: 'Yokyo-FunOlympics@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Please click the following link to verify your email: http://localhost:3000/user/verify/${verificationToken}`
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
};




exports.register = (req, res) => {
    const { firstName, lastName, username, email, password, passwordConfirm, captcha } = req.body;

    try {
        axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captcha}`)
            .then(async ({ data }) => {
                if (data.success === true) {
                    try {

                        const existingUser = await User.findOne({ email });
                        if (existingUser) {
                            return res.status(409).json({ message: 'User with this email already exists' });
                        }
                        const verificationToken = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1d' });

                        const newUser = new User({
                            firstName,
                            lastName,
                            username,
                            email,
                            password,
                            passwordConfirm,
                            verificationToken
                        });

                        // Save the user to the database

                        await newUser.save();

                        // Send verification email
                        await sendVerificationEmail(email, verificationToken);

                        // Return response
                        res.status(200).json({ message: 'Registration successful. Verification email sent.' });
                    } catch (error) {
                        console.error('Error registering user:', error);
                        res.status(500).json({ message: 'Registration failed. Please try again.' });
                    }



                }
                else {
                    res.status(400).json({ message: 'Captcha verification Failed' });
                }
            })


    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    };
};



exports.verify = async (req, res) => {
    try {
        const { token } = req.params;

        // Verify the token
        const decodedToken = jwt.verify(token, 'your-secret-key');

        // Get the email from the decoded token
        const { email } = decodedToken;
        console.log(email);

        // Find the user by email and verification token
        const user = await User.findOne({ email, verificationToken: token });

        if (!user) {
            return res.status(400).json({ message: 'Invalid verification token' });
        }

        // Update user verification status
        user.isVerified = true;
        user.verificationToken = null;

        await user.save();

        // Return response
        res.status(200).json({ message: 'Email verification successful' });
    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).json({ message: 'Email verification failed' });
    }


};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please enter valid credentials!'
            });
        }

        const checkUser = await User.findOne({ email: email });




        console.log(checkUser);
        console.log(password);
        if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid credentials!'
            });
        }

        if (!checkUser.isVerified) {
            return res.status(400).json({
                status: 'fail',
                message: 'User is not verified!'
            });
        }

        if (!checkUser.enabled) {
            return res.status(400).json({
                status: 'fail',
                message: 'User is disabled!'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: checkUser.id }, secretKey, { expiresIn: '1h' });

        res.status(200).json({
            user: checkUser,
            token: token
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.userById = async (req, res, next) => {
    const userId = req.user.userId;

    // Find user by ID
    const user = await users.find((user) => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
};





exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token not found' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    });
}

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.disableOrEnableUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Toggle the user's enabled status
        user.enabled = !user.enabled;

        // Save the updated user in the database
        await user.save();

        const action = user.enabled ? 'enabled' : 'disabled';
        res.json({ message: `User ${action} successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.changePassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    try {
        // Find the user by userId
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the current password matches the user's stored password
        // const isMatch = await bcrypt.compare(currentPassword, user.password);

        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Incorrect current password' });
        // }

        // Set the new password
        user.password = newPassword;
        user.passwordConfirm = newPassword;

        // Save the updated user with the new password
        await user.save();

        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Find the user by email
        const user = await User.find({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user);
        // console.log(user._id);
        // Generate a password reset token
        const resetToken = jwt.sign({ email }, secretKey, { expiresIn: '30m' });
        // console.log(user._id);
        // Send password reset email
        await sendPasswordResetEmail(email, resetToken);

        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Password reset failed' });
    }
};

const sendPasswordResetEmail = async (email, resetToken) => {
    try {
        const mailOptions = {
            from: 'Yokyo-FunOlympics@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `Please click the following link to reset your password: http://localhost:3000/user/resetpassword/${resetToken}`
        };

        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
    }
};

exports.resetPassword = async (req, res) => {
    const { token } = req.params;

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, secretKey);

        // Get the user ID from the token
        const { email } = decodedToken;

        // Find the user by ID
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPassword = generateStrongPassword();
        // Set the new password
        user.password = newPassword;
        user.passwordConfirm = newPassword;

        // Save the updated user with the new password
        await user.save();

        await sendPasswordResettedEmail(user.email, newPassword);

        res.json({ message: 'Password reset successful. Check Your Email for New Password.' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Password reset failed' });
    }
};

const sendPasswordResettedEmail = async (email, password) => {
    try {
        const mailOptions = {
            from: 'Yokyo-FunOlympics@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `Your new Password is ${password} Please change soon. `
        };

        await transporter.sendMail(mailOptions);
        console.log('Password  sent successfully');
    } catch (error) {
        console.error('Error sending password:', error);
    }
};

const generateStrongPassword = () => {
    const length = 12; // Desired length of the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    let password = 'A1a!';

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, characters.length);
        password += characters[randomIndex];
    }

    return password;
};