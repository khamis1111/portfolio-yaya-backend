const multer = require('multer')
const path = require('path');
const ApiError = require('./apiError')

const uploadFiles = (img, video) => {
    // Upload Multi or Single Img
    const multerStorage = multer.diskStorage(
        {
            destination: function (req, file, cb) {
                if (file.fieldname === img) {
                    cb(null, `uploads/${img}`);
                } else if (file.fieldname === video) {
                    cb(null, `uploads/${video}/`);
                }
            },
            filename: function (req, file, cb) {
                if (file.fieldname === img) {
                    const ext = path.extname(file.originalname)
                    const fileImg = `${img}-${Date.now()}${ext}`
                    req.body[img] = fileImg;
                    cb(null, fileImg)
                } else if (file.fieldname === video) {
                    const ext = path.extname(file.originalname)
                    const filevideo = `${video}-${Date.now()}${ext}`
                    req.body[video] = filevideo;
                    cb(null, filevideo)
                }
            }
        }
    )
    const multerFilter = (req, file, cb) => {
        if (file.fieldname === img) {
            if (file.mimetype.startsWith("image")) {
                cb(null, true);
            } else {
                cb(new Error("Allow Image Only"), false);
            }
        } else if (file.fieldname === video) {
            if (file.mimetype.startsWith("video")) {
                cb(null, true);
            } else {
                cb(new Error("Allow Video Only"), false);
            }
        } else {
            cb(new Error("Unknown File"), false);
        }
    }
    const upload = multer({ storage: multerStorage, fileFilter: multerFilter })
    return upload
}

module.exports = {
    // singleImg: ({ file }, { img }, { video }) => uploadFiles(img, video).single(file),
    multiImg: (fields, img, video) => uploadFiles(img, video).fields(fields)
}