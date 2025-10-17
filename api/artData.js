const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;
console.log('API Base URL:', dbURL);

const getArt = () => new Promise((resolve, reject) => {
    fetch(`${dbURL}/art`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
            console.error('Error fetching art:', error);
            reject(error);
        });
});

// Gets six items of art per page, images load faster this way
const getSixArt = (page = 1, itemsPerPage = 6) => new Promise((resolve, reject) => {
    fetch(`${dbURL}/art?page=${page}&limit=${itemsPerPage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
            console.error('Error fetching art:', error);
            reject(error);
        });
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


export { getArt, getSixArt, getSingleArt, getArtIDs };
