document.getElementById('promiseBtn').addEventListener('click', () => {
    const promise = new Promise((resolve, reject) => {
        document.getElementById('promiseDiv').innerText = "Loading...";

        setTimeout(() => {
            reject("Operation timed out.");
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => resolve(data.posts))
            .catch(error => reject(error));
    });

    promise
        .then(posts => {
            const titles = posts.map(post => post.title).join('<br>');
            document.getElementById('promiseDiv').innerHTML = titles;
        })
        .catch(error => {
            document.getElementById('promiseDiv').innerText = `Error: ${error}`;
        });
});
