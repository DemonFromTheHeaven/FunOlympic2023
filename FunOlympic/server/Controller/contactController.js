const Contact = require('./../Model/contactModel');


exports.contact = async (req, res) => {
    const { fullname, email, message } = req.body;

    try {
        const newMessage = new Contact({
            fullname,
            email,
            message
        });

        await newMessage.save();
        res.status(200).json({
            status: 'success',
            message: 'Message saved successfully!'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 'fail',
            message: 'Failed to save the message!'
        });
    }

};

exports.getMessage = async (req, res) => {


    try {
        const message = await Contact.find();
        res.json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

