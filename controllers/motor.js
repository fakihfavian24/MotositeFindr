const Motor = require('../models/motor')
const fs = require('fs')

module.exports.index = async (req, res) => {
    const motors = await Motor.find()
    const msg = req.flash('succes_msg','motor fetched successfully')
     res.json({msg, motors });
  }

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
module.exports.search = async (req, res) => {
    let motors;
    if (req.query.search) {
      const searchRegex = new RegExp(escapeRegex(req.query.search), 'gi');
      motors = await Motor.find({ model: searchRegex });
    } else {
      if (req.query.sortBy === 'terbaru') {
        motors = await Motor.find().sort({ postDate: -1 });
      } else if (req.query.sortBy === 'terlama') {
        motors = await Motor.find().sort({ postdate: 1 });
      } else {
        motors = await Motor.find();
      }
    }
    res.json({ motors });
  }

module.exports.detail = async (req, res) => {
    const { id } = req.params;
    const motor = await Motor.findById(id)
    .populate({
      path : 'comments',
      populate:{
        path:'author'
      }
    })
    .populate('author')
console.log(motor)
    res.json({ motor });
}
module.exports.form = (req, res) => {
    res.json({ message: 'Halaman new post' });
};

module.exports.store = async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => file.path);
    const motorData = { ...req.body.motor, imageURL: imageUrls };
    const motor = new Motor(motorData);
    motor.author = req.user._id
    await motor.save();
    res.json({ motor });
  } catch (error) {
    console.error('Error storing motor:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.edit = async (req, res) => {
    const motor = await Motor.findById(req.params.id);
    res.json({ message: 'Halaman edit', motor });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    let motor = await Motor.findById(id);
    if (!motor) {
      return res.status(404).json({ error: 'Motor not found' });
    }
    motor.set(req.body.motor);
    if (req.file && req.file.path) {
      const newImageUrl = req.file.path;
      motor.imageURL = newImageUrl;
    }
    await motor.save();
    req.flash('success_msg', 'Data motor berhasil di-update');
    res.json({ message: 'Motor updated successfully', motor });
  } catch (error) {
    console.error('Error updating motor:', error.message);
    res.status(500).json({ error: 'Failed to update motor', details: error.message });
  }
};

  module.exports.destroy = async (req, res) => {
    try {
      const { id } = req.params;
      const motor = await Motor.findById(id);
      if (!motor) {
        return res.status(404).json({ error: 'Motor tidak ditemukan' });
      }
      if (Array.isArray(motor.imageURL) && motor.imageURL.length > 0) {
        await Promise.all(
          motor.imageURL.map(async (image) => {
            try {
              await fs.unlink(image);
            } catch (unlinkError) {
              console.error(`Error unlinking image: ${unlinkError.message}`);
            }
          })
        );
      } 
      await motor.deleteOne();
      req.flash('success_msg', 'Data berhasil dihapus');
      res.json({ message: 'Motor berhasil dihapus' });
    } catch (error) {
      console.error('Error menghapus motor:', error.message);
      res.status(500).json({ error: 'Error Server Internal' });
    }
  };