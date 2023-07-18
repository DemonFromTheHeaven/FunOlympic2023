const News = require('../Model/newsModel');

exports.addNews = async (req, res) => {
    const { title, photo, description, type } = req.body;


    const addNews = await News.create({ title, photo, description, type });
    res.status(200).json({
        status: 'success'
    });

}

exports.getAllNews = async (req, res) => {
    try {

        const allNews = await News.find();

        res.json(allNews);

    }
    catch {
        res.json({ message: 'couldn\'t contact database' })
    }

}

exports.getNewsbyId = async (req, res) => {
    const id = req.params.id;
    const NewsbyID = await News.findById(id);
    if (NewsbyID) {
        res.json(NewsbyID)
    }
};

exports.deleteNewsById = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedNews = await News.findByIdAndDelete(id);

        if (!deletedNews) {
            return res.status(404).json({ message: 'News item not found' });
        }

        res.json({ message: 'News item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};