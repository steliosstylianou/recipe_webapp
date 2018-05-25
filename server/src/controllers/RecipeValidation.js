const Joi = require('joi')

module.exports = {
    create (req, res, next){
        const schema = {
            title: Joi.string().min(5),
            author: Joi.string().min(3),
            category: Joi.string().min(3),
            subcategory: Joi.string().min(3),
            difficulty: Joi.number().integer(),
            time: Joi.number().integer(),
            ingredients: Joi.string(),
            method: Joi.string(),
        }

        const {error, value} = Joi.validate(req.body,schema)
        if (error){
            switch (error.details[0].context.key) {
                case 'title':
                    res.status(400).send({
                        error: 'You must provide a valid title'
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
                case 'time':
                    res.status(400).send({
                        error: 'You must provide a valid time period needed'
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
    }
}