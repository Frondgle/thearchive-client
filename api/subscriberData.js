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
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                resolve(data);
            } else {
                reject(new Error(data.message || 'Error subscribing'));
            }
        })
        .catch((error) => {
            console.error('Error subscribing:', error);
            reject(error);
        });
});

export { subscribeEmail };