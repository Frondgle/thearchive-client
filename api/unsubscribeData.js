const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;
// const dbURL = 'http://localhost:8000';
console.log('API Base URL:', dbURL);

const unsubscribeToken = (token) => new Promise((resolve, reject) => {
    fetch(`${dbURL}/api/unsubscribe/?token=${token}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
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

export { unsubscribeToken };