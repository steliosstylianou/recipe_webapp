const multer = require('multer');

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

        fileFilter: function (req, file, next) {
            if (!file) {
                next();
            }

            const image = file.mimetype.startsWith('image/');
            if (image) {
                console.log('photo uploaded');
                next(null, true);
            } else {
                return next(null, false,
                    (null, false, new Error('Unsupported File Format')));
            }
        }
    }
};
