const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;

const getArt = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/art`, {
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

const getSingleArt = (id) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/art/${id}`, {
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

const getArtIDs = () => new Promise((resolve, reject) => {
  fetch(`${dbURL}/art`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const artIDs = data.map(a => a.id)
        resolve(artIDs)
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});


export { getArt, getSingleArt, getArtIDs };
