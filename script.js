// This script will handle the "Like" button functionality.
const likeButton = document.getElementById('like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.getAttribute('data-post-id');
        const likeCount = document.querySelector(`.like-count[data-post-id="${postId}"]`);
        
        // Simulate a like action (in a real application, this would involve an API call)
        let currentCount = parseInt(likeCount.textContent, 10);
        likeCount.textContent = currentCount + 1;
        
        // Optionally, change the button style to indicate it has been liked
        button.classList.toggle('liked');
    });
}