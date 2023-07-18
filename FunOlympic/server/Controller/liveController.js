const Live = require('./../Model/liveModel');

exports.addLive = async (req, res) => {
    const { title, photo, link, game, team1, team2, startDate, description } = req.body;


    const addLive = await Live.create({ title, photo, link, game, team1, team2, startDate, description });
    res.status(200).json({
        status: 'success'
    });

}

exports.getAllLive = async (req, res) => {
    try {

        const allLive = await Live.find();

        res.json(allLive);

    }
    catch {
        res.json({ message: 'couldn\'t contact database' })
    }

}

exports.getLivebyId = async (req, res) => {
    const id = req.params.id;
    const LivebyID = await Live.findById(id);
    if (LivebyID) {
        res.json(LivebyID)
    }
};

exports.deleteLiveById = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedLive = await Live.findByIdAndDelete(id);

        if (!deletedLive) {
            return res.status(404).json({ message: 'Live item not found' });
        }

        res.json({ message: 'Live item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.LiveUnLive = async (req, res) => {
    const { id } = req.params;

    try {
        const live = await Live.findOne({ _id: id });

        if (!live) {
            return res.status(404).json({ message: 'live not found' });
        }

        live.islive = !live.islive;

        // Save the updated live in the database
        await live.save();

        const action = live.islive ? 'live' : 'Unlived';
        res.json({ message: `Live ${action} successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};