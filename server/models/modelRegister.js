const mongoose = require('mongoose');

const postshema = new mongoose.Schema({
    name: {
        type : String,
        require:true
    },
    mail:{
        type : String,
        require:true 
    },
    password1 : {
        type : String,
        require:true 
    },
    password2 : {
        type : String,
        require:true 
    },
    favorites: {
        type : Array,
        require:false
    }
})
const Register = mongoose.model('users',postshema);
module.exports = Register;