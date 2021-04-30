const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gedungkampusSchema = new Schema({
    namapenyewa:{
        type: String
        },
        kodegedung:{
            type: String
        },
        namagedung:{
            type: String
        },
        fasilitas:{
            type: String
        },
        biayasewaperhari:{
            type: String
        },
        lamamenyewa:{
            type: String
        },
        totalbiaya:{
            type: String
            
        }
})
module.exports =mongoose.model('gedungkampus',gedungkampusSchema)