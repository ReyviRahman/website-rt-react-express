const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Surat extends Model {}

Surat.init({
  nik: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,     // Pastikan NIK harus diisi
  },
  keperluanSurat: {
    type: DataTypes.STRING,
    allowNull: false      // Kolom ini juga wajib diisi
  },
  KTP: {
    type: DataTypes.STRING,  // Menyimpan path file KTP yang diupload
    allowNull: false         // Wajib diisi
  },
  KK: {
    type: DataTypes.STRING,   // Menyimpan path file KK yang diupload
    allowNull: false          // Wajib diisi
  },
}, {
  sequelize,
  modelName: 'Surat',
});

module.exports = Surat;
