const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;
console.log('API Base URL:', dbURL);

const subscribeEmail = (email) => new Promise((resolve, reject) => {
  fetch(`${dbURL}/api/subscribe/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      if (!response.ok) {
        reject(new Error(data.message || `Error: ${response.status}`));
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => {
      console.error('Error subscribing:', error);
      reject(error);
    });
});

export { subscribeEmail };