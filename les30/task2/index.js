export const addImageV2 = url => {
  const addImage = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    const onImageLoaded = () => {
      const { width, height } = img;
      resolve({ width, height });
    };

    img.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  });

  return addImage;
};

// addImageV2('https://server.com/image.png')
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
