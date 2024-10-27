const express = require('express')
const router = express.Router()
const SuratModel = require('../models/surat')
const User = require('../models/users')
const uploadFiles = require('../middleware/uploadFiles')
const jwt = require('jsonwebtoken');
const secretKey = 'reyvisacd123';

router.get('/', async (req, res) => {
  try {
    const surat = await SuratModel.findAll({
      include: [{
        model: User,
        attributes: [ 'nama', 'ttl', 'alamat', 'agama', 'statusPerkawinan'],
      }]
    });
    res.status(200).json({
      allSurat: surat,
      metadata: "Get All Surat"
    })
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data surat.' });
  }
})

router.get('/suratuser', async (req, res) => {
  try {
    if (req.cookies.cookieToken) {
      console.log('ini cookie token: ', req.cookies.cookieToken)

      const decoded = jwt.verify(req.cookies.cookieToken, secretKey);

      console.log('ini decoded', decoded)
      const nik = decoded.nik
      const surat = await SuratModel.findAll({
        where: { nik } 
      });
  
      if (surat.length === 0) {
        return res.status(404).json({ message: 'Data surat tidak ditemukan untuk NIK tersebut.' });
      }
  
      res.status(200).json({
        allSurat: surat,
        metadata: "Get Surat"
      });
    } else {
      res.status(401).json({
        message: "token tidak ada silahkan login kembali"
      })
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data surat.' });
  }
})

router.post('/', uploadFiles, async (req, res) => {
  try {
    const {nik , keperluanSurat} = req.body

    const fileKTP = req.files['fileKTP'][0].path
    const fileKK = req.files['fileKK'][0].path

    const suratBaru = await SuratModel.create({
      nik,
      keperluanSurat,
      KTP: fileKTP,
      KK: fileKK,
      status: "Terkirim",
      keterangan: "Sedang Diproses"
    })

    res.status(201).json({
      surat: suratBaru,
      metadata: "Berkas berhasil diunggah"
    })
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
})

module.exports = router