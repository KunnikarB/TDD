
// export const fetchData = new Promise((resolve, reject) => {
//   let success = true;
//   if(success) {
//     resolve('resolved succefully!')
//   } else {
//     reject('Too bad');
//   }  
// });

export const fetchData = (success = true) => {
  return new Promise((resolve, reject ) => {
    setTimeout(() => {
      if (success) {
        resolve('resolved succefully!');
      } else {
        reject('To bad');
      }
    })
  });
}
