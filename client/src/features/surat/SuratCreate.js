import React, { useState } from 'react'
import Footer from '../../components/Footer'

const SuratCreate = () => {
  const [keperluanSurat, setKeperluanSurat] = useState('Surat Pengantar Pembuatan KTP')
  const [fileKTP , setFileKTP] = useState(null)
  const [fileKK, setFileKK] = useState(null)

  return (
    <>
      <div className='container mx-auto mb-5'>
        <h1 className='text-3xl font-semibold text-center'>Layanan Surat Pengantar RT</h1>
        <div className='flex justify-center mt-3'>
          <form className='basis-1/2 flex flex-col border border-primary rounded p-5'>
            <h1 className='text-2xl text-center font-semibold mb-3'>Masukkan Berkas</h1>

            <div className='flex flex-col'>
              <label htmlFor='username' className='block text-md font-medium text-gray-900'>
                Jenis Keperluan Surat
              </label>
              <select 
              className='mt-1 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md'
              id='keperluanSurat'
              name='keperluanSurat'
              value={keperluanSurat}
              onChange={e => setKeperluanSurat(e.target.value)}>
                <option value="Surat Pengantar Pembuatan KTP">Surat Pengantar Pembuatan KTP</option>
                <option value="Surat Pengantar Pembuatan Akta Kelahiran Anak">Surat Pengantar Pembuatan Akta Kelahiran Anak</option>
                <option value="Surat Pengantar Pengurusan SKTM">Surat Pengantar Pengurusan SKTM</option>
                <option value="Surat Pengantar Pengurusan Kartu Keluarga">Surat Pengantar Pengurusan Kartu Keluarga</option>
                <option value="Surat Pengantar Pengurusan Surat Pindah Penduduk">Surat Pengantar Pengurusan Surat Pindah Penduduk</option>
                <option value="Surat Pengantar Pengurusan Surat Domisili">Surat Pengantar Pengurusan Surat Domisili</option>
                <option value="Surat Pengantar Pengurusan Surat Ahli Waris">Surat Pengantar Pengurusan Surat Ahli Waris</option>
                <option value="Surat Pengantar Pengurusan Surat Dispensasi Nikah">Surat Pengantar Pengurusan Surat Dispensasi Nikah</option>
                <option value="Surat Pengantar Pengurusan Surat Rekomendasi Sekolah">Surat Pengantar Pengurusan Surat Rekomendasi Sekolah</option>
                <option value="Surat Pengantar Pengurusan Surat Keterangan Kematian">Surat Pengantar Pengurusan Surat Keterangan Kematian</option>
                <option value="Surat Pengantar Pengurusan Surat Keterangan Usaha">Surat Pengantar Pengurusan Surat Keterangan Usaha</option>
              </select>
            </div>

            <div className='flex flex-col mt-2'>
              <label htmlFor='fileKTP' className='text-md font-medium text-gray-900'>
                Upload KTP
              </label>
              <label htmlFor='fileKTP' className='text-sm font-medium text-primary'>
                Upload file dalam bentuk PDF
              </label>
              <input
                className='mt-1 border border-slate-300 focus:outline-none focus:ring-1 focus:border-sky-500 focus:ring-sky-500 rounded-md px-3 py-2 '
                id='fileKTP'
                type='file'
                name='fileKTP'
                accept='.pdf'
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type !== "application/pdf") {
                    alert("Hanya file PDF yang diperbolehkan!");
                    e.target.value = null;
                  } else {
                    setFileKTP(file)
                  }
                }} 
              />
            </div>
            
            <div className='flex flex-col mt-2'>
              <label htmlFor='fileKK' className='text-md font-medium text-gray-900'>
                Upload KK
              </label>
              <label htmlFor='fileKK' className='text-sm font-medium text-primary'>
                Upload file dalam bentuk PDF
              </label>
              <input
                className='mt-1 border border-slate-300 focus:outline-none focus:ring-1 focus:border-sky-500 focus:ring-sky-500 rounded-md px-3 py-2 '
                id='fileKK'
                type='file'
                name='fileKK'
                accept='.pdf'
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type !== "application/pdf") {
                    alert("Hanya file PDF yang diperbolehkan!");
                    e.target.value = null;
                  } else {
                    setFileKK(file)
                  }
                }} 
              />
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default SuratCreate