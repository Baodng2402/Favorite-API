const Favorite = require("../model/favorite");

const favoirteProductController = {
  addFavorite: async (req, res) => {
    try {
      const { id } = req.params;
      const { artName, price, description, image, brand, limitedTimeDeal } =
        req.body;

      //Check duplicate
      const existsFavorite = await Favorite.findOne({ id });
      if (existsFavorite)
        return res
          .status(500)
          .json({ message: "This art already exists in product!" });

      //Add
      const newFavorite = new Favorite({
        id,
        artName,
        price,
        description,
        image,
        brand,
        limitedTimeDeal,
      });
      const saveFavorite = await newFavorite.save();
      return res.status(201).json({
        message: "Add art in favorite successfully!",
        data: saveFavorite,
      });
    } catch (error) {
      console.error("Add Favorite Failed", error);
      res.status(500).json(error);
    }
  },
  getAllFavorite: async (req, res) => {
    try {
      const favorite = await Favorite.find();
      res.status(201).json(favorite);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  removeOneFavorite: async (req, res) => {
    try {
      const { id } = req.params;
      const favorite = await Favorite.deleteOne({ id });
      res.status(201).json(favorite);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  removeManyFavorite: async (req, res) => {
    try {
      const result = await Favorite.deleteMany();
      res.status(200).json({ deletedCount: result.deletedCount });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = favoirteProductController;
