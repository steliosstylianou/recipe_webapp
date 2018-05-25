const Joi = require('joi')

module.exports = {
    create (req, res, next){
        const schema = {
            title: Joi.string().min(5).required(),
            author: Joi.string().min(3).required(),
            category: Joi.string().min(3).required(),
            subcategory: Joi.string().min(3).required(),
            difficulty: Joi.number().integer().required(),
            time: Joi.number().integer().required(),
            ingredients: Joi.string().required(),
            method: Joi.string().required(),
        }

        Joi.validate(req.body, schema, function(error,val) {
            console.log(val)
            if (error){
                console.log(error)
                switch (error.details[0].context.key) {
                    case 'title':
                        res.status(400).send({
                            error: 'You must provide a valid title'
                        })
                        break
                    case 'time':
                        res.status(400).send({
                            error: 'You must provide a time duration'
                        })
                        break
                    case 'author':
                        res.status(400).send({
                            error: 'You must provide a valid author'
                        })
                        break
                    case 'category':
                        res.status(400).send({
                            error: 'You must provide a valid category'
                        })
                        break
                    case 'subcategory':
                        res.status(400).send({
                            error: 'You must provide a valid subcategory'
                        })
                        break
                    case 'method':
                        res.status(400).send({
                            error: 'You must provide a valid method'
                        })
                        break
                    case 'ingredients':
                        res.status(400).send({
                            error: 'You must provide valid ingredients'
                        })
                        break
                    case 'difficulty':
                        res.status(400).send({
                            error: 'You must provide a difficulty rating'
                        })
                        break
                }
            }
            else {
                console.log("validated correctly")
                next()
            }
        });
    }
}