export const getOptimizedImageUrl = (picUrl) => {
    const cloudinaryURL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const imagePath = picUrl.split('image/upload/')[1];
    // return `${cloudinaryURL}image/upload/w_300,h_363,q_auto:eco,f_auto,fl_progressive,fl_png8/${imagePath}`;
    return `${cloudinaryURL}image/upload/w_1000,h_1210,q_auto:good,f_auto,fl_progressive/${imagePath}`;
    // return `${cloudinaryURL}image/upload/w_auto,c_limit,dpr_auto,q_auto:good,f_auto,fl_progressive/${imagePath}`;
};