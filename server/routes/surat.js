const express = require('express')
const router = express.Router()
const SuratModel = require('../models/surat')
const uploadFiles = require('../middleware/uploadFiles')

router.get('/', async (req, res) => {
  res.status(200).json({
    metadata: "Get Surat"
  })
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
      KK: fileKK
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