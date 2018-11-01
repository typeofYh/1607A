function imageLoad(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject('报错')
        }
        img.src = src;
    });
}