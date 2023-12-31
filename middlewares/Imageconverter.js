const fs = require("fs");
require('dotenv').config()
var cloudinary = require("cloudinary");
const converter = async (req, res, next) => {
//   console.log("body", req.files);
//   console.log("body", req.body);

  if (!req.files || !req.files.image) {
    return res.status(400).json({ error: "Image file is required" });
  }
  cloudinary.config({
    cloud_name:"da6wwavbh",
    api_key: "216685165564644",
    api_secret:"B9Tu_HgpTY2yEM1hKDjkYBdXP-Y",
    secure: true,
  });
  try {
    const filePath = req.files.image.tempFilePath;
    let imageUrl = await cloudinary.uploader.upload(filePath, {
      folder: "nem-111-project",
    });
    console.log("image after upload", imageUrl);
    req.body.image = imageUrl.url;
    fs.unlinkSync(filePath);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to upload image" });
  }
};
module.exports = {
  converter,
};