const Register = require('../models/modelRegister');

module.exports.AddFavoriteItem = async (req, res) => {
    const {
        mail,
        item // object (original.title,img,vote_average etc..)
    } = req.body;

    //find the user who are connected
    const user = await Register.findOne({
        mail
    });
    // if not found the user
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    // Search into the favorites array if the item already exists using the title name of the item
    const checkIfItemAlreadyExists = await Register.find({
        favorites: {
            $elemMatch: {
                original_title: item.original_title
            }
        }
    });
    // if the item is not exist into the favorites array 
    if (checkIfItemAlreadyExists.length === 0) {
        const updatedUser = await Register.findOneAndUpdate({
            mail: mail
        }, {
            $push: {
                favorites: item
            }
        }, {
            new: true
        });

        return res.status(200).json(updatedUser);

    } else { // if already exist into the playlist
        return res.status(409).json({
            message: 'This film is already in your playlist'
        })
    };
};

module.exports.FavoriesList = async (req, res) => {
    const mail = req.params.mail;

    const user = await Register.findOne({
        mail: mail
    });

    if (!user) {
        return res.status(404).json({
            message: 'User not found. Cannot print favorite list.'
        });
    } else {
        return res.status(200).json(user.favorites);
    }
};

module.exports.RemoveFilm = async (req, res) => {
    const mail = req.body.mail;
    const id = req.params.id;
  
    try {
      const updatedUser = await Register.findOneAndUpdate(
        { mail: mail },
        { $pull: { favorites: { id: Number(id) } } },
        { new: true }
      );

      console.log(updatedUser)
  
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: 'Film not found in favorites' });
      }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  };
  