const mongoose = require('mongoose')

const picturesInfoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    categorie : {
        type: Array,
        required: true,
    },
    public_id : {
        type: String,
        required: true,
    }
})

const Picture = mongoose.model("Picture", picturesInfoSchema)
module.exports = Picture