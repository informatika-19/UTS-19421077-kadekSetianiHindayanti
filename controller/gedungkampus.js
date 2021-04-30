const gedungkampusModel = require ('../model/gedungkampus')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    gedungkampusModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'input pembelian berhasil'
    })).catch (() => reject({
        status : false,
        pesan: 'input pembelian gagal'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    gedungkampusModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' pembaruan berhasil ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'pembaruan gagal',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    gedungkampusModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    gedungkampusModel.findOne({
        _id: objectid(id)
      }).then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      gedungkampusModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'penghapusan berhasil',
        })).catch(()=> reject ({
        status : false,
        pesan : 'penghapusan gagal',
        }))
    })