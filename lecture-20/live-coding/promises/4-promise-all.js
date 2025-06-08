const newPostData = {
    title: 'My Awesome New Post',
    body: 'This is the content of the post.',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPostData)
})
.then(response => response.json())
.then(createdPost => {
    console.log('Server responded with:', createdPost);
    // Note: JSONPlaceholder simulates the creation and
    // returns an object with the new ID.
})
.catch(error => console.error('Error creating post:', error));
