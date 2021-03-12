'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //id automatico
    title: {
        type: String,
        required: true, // obrigatorio
        trim: true //remove espaco
    },
    slug: { //cadeira gamer = cadeira-gamer index e obrigatorio
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    
});

module.exports = mongoose.model('Product', schema);