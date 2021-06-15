// function handleError(err) {
//     console.log(err);
// }
const endpoint = 'http://api.mediastack.com/v1/news?access_key=a61a9db532ead35efef16ded25abed70&keywords=tennis';
const wesPromise = fetch(endpoint);

wesPromise.then(response => {
    return response.json();
    console.log(response);
}).then(data => {
    console.log(data);
})

export function newsapi() {
    const endpoint = 'http://api.mediastack.com/v1/news?access_key=a61a9db532ead35efef16ded25abed70&keywords=tennis';
    const wesPromise = fetch(endpoint);

    wesPromise.then(response => {
        return response.json();
        console.log(response);
    }).then(data => {
        console.log(data);
    })
}