export const getOptimizedImageUrl = (picUrl) => {
    const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const imagePath = picUrl.split('image/upload/')[1];
    return `${cloudinaryURL}image/upload/w_1000,h_1210,q_auto:good,f_auto,fl_progressive/${imagePath}`;
};