
publicPath: process.env.NODE_ENV === 'production'
module.exports = {
<<<<<<< HEAD
  publicPath: 'MITS2.0_FE',
  filenameHashing: false
}
=======
    publicPath: process.env.NODE_ENV === 'production' ? '/mits2' : '/'
}
>>>>>>> 15f45c72fa3635e57f9c838077b759bb1efcbcdf
