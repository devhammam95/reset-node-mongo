const { default: mongoose } = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength:25
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
},
{
    timestamps: true
}
);

const categoryModel = mongoose.model('Category', categorySchema)
categoryModel.createIndexes()

module.exports = categoryModel
