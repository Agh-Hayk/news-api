const News = require("../models/newsModel");

exports.getAllNews = async (req, res) => {
   try {
      const news = await News.find();
      res.json(news);
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

exports.createNews = async (req, res) => {
   try {
      const { title, content } = req.body;
      const news = new News({ title, content });
      await news.save();
      res.status(201).json(news);
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

exports.updateNews = async (req, res) => {
   try {
      const { id } = req.params;
      const { title, content } = req.body;
      const news = await News.findByIdAndUpdate(
         id,
         { title, content },
         { new: true }
      );
      res.json(news);
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

exports.deleteNews = async (req, res) => {
   try {
      const { id } = req.params;
      await News.findByIdAndDelete(id);
      res.status(204).end();
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
   }
};
