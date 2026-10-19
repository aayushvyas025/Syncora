import cloudinary from "#configs/cloudinary/cloudinary.config";

export async function uploadToCloudinary(media) {
  const uploadResponse = await cloudinary.uploader.upload(media);
  return uploadResponse.secure_url;
}

