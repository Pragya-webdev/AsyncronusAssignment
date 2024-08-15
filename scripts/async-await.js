document.getElementById('asyncBtn').addEventListener('click', async () => {
    document.getElementById('asyncDiv').innerText = "Loading...";

    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const titles = data.posts.map(post => post.title).join('<br>');
        document.getElementById('asyncDiv').innerHTML = titles;
    } catch (error) {
        document.getElementById('asyncDiv').innerText = `Error: ${error.message}`;
    }
});
