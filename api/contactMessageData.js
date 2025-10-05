const dbURL = process.env.NEXT_PUBLIC_HEROKU_URL;
console.log('API Base URL:', dbURL);

export const sendMessage = async (name, email, content) => {
    try {
        const response = await fetch(`${dbURL}/api/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                content: content
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to send message');
        }

        return data;
    } catch (error) {
        throw error;
    }
};