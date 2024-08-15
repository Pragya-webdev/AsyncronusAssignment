document.getElementById('callbackBtn').addEventListener('click', () => {
    function callbackFunction() {
        let countdown = 5;

        const countdownInterval = setInterval(() => {
            document.getElementById('callbackDiv').innerText = `Loading... ${countdown} seconds remaining`;
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                document.getElementById('callbackDiv').innerText = "Callback executed after 5 seconds";
                fetchData(callbackFunction);
            }
        }, 1000);
    }

    callbackFunction();
});

function fetchData(callback) {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            const posts = data.posts.map(post => post.title).join('<br>');
            document.getElementById('callbackDiv').innerHTML = posts;
        })
        .catch(error => {
            document.getElementById('callbackDiv').innerText = `Error: ${error.message}`;
        });
}
