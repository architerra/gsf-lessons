export const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, time);
  });

// delay(3000).then(() => console.log(33));
