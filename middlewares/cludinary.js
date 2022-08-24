
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'brunosite', 
    api_key: '286357543549925', 
    api_secret: '7SgKE55cKOsvoIeEqpo1Oqehb8g' 
  });




exports.uploads = (file , folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file , (result) =>{
            resolve({
                url: result.url,
                id: result.public_id
            })
        },
        {
            resource_type: 'auto',
            folder: folder
        }
        )   })
}

