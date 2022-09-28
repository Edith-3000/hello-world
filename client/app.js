const GRAPHQL_SERVER_URL = 'http://localhost:9000/'

// Function which shows how to make a request to GraphQL server over HTTP
async function fetchGreeting() {
    const response = await fetch(GRAPHQL_SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `,
        }),
    });

    const responseBody = await response.json();
    console.log(responseBody);

    const data = responseBody.data;
    return data;
}

const element = document.getElementById('greeting')
element.textContent = 'Loading...';

fetchGreeting().then((data) => {
    element.textContent = data.greeting;
});