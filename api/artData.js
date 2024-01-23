const getArt = () => new Promise((resolve, reject) => {
  fetch("https://the-sonatore-archive-840804772ccc.herokuapp.com/art", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// const getSingleArt = (id) => new Promise((resolve, reject) => {
//   fetch(`https://the-sonatore-archive-840804772ccc.herokuapp.com/art/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

const getSingleArt = (id) => new Promise((resolve, reject) => {
  fetch(`https://the-sonatore-archive-840804772ccc.herokuapp.com/art/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => {
      console.error('Error fetching single art:', error);
      reject(error);
    });
});


export { getArt, getSingleArt };
