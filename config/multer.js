const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const ExpressError = require('../utils/ErrorHandler'); // Sesuaikan dengan modul kesalahan yang sesuai

// Konfigurasi Cloudinary
cloudinary.config({
    cloud_name: 'ddrepuzxq',
    api_key: '975887318657333',
    api_secret: '6nEulps4pij6EsX0RwMNZESg5gc'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            const error = new ExpressError('Hanya gambar yang diizinkan.', 405);
            cb(error);
        }
    }
});

module.exports = upload;
