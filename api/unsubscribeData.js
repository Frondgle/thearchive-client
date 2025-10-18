const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;
// const dbURL = 'http://localhost:8000';
console.log('API Base URL:', dbURL);

const unsubscribeEmail = (email) => new Promise((resolve, reject) => {
    fetch(`${dbURL}/api/unsubscribe/`, {
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
                reject(new Error(data.message || 'Error unsubscribing'));
            }
        })
        .catch((error) => {
            console.error('Error unsubscribing:', error);
            reject(error);
        });
});

export { unsubscribeEmail };