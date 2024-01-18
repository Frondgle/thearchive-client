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

export default getArt;
