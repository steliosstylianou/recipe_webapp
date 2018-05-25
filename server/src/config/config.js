const multer = require('multer');
const path = require('path');

function checkFileType(file, cb){

    const filetypes = /jpeg|jpg|png|gif/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    } else {
        cb('Error: Images Only!');
    }
}

module.exports = {
    port: process.env.PORT || 8000,
    db: process.env.DATABASE || './src/models/users.db',
    authentication: {
        jwtSecret: process.env.JWT_TOKEN || 'token'
    },
    multer: {
        //specify diskStorage (another option is memory)
        storage: multer.diskStorage({

            destination: function (req, file, next) {
                next(null, 'uploads/recipes/');
            },

            filename: function (req, file, next) {
                console.log(file);

                const ext = file.mimetype.split('/')[1];

                next(null, file.fieldname + '-' + Date.now() + '.' + ext);
            }
        }),
        limits:{fileSize: 1000000},
        fileFilter: function(req, file, cb){
            checkFileType(file, cb);
        }
    }
};
