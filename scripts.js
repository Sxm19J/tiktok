document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('videoContainer');
    const videoSources = ['video1.mp4', 'video2.mp4', 'video3.mp4']; // Replace with your actual video sources
    let currentIndex = 0;

    // Load the videos into the container
    const loadVideos = () => {
        container.innerHTML = '';
        videoSources.forEach((src, index) => {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.style.width = '100%';
            video.style.display = index === currentIndex ? 'block' : 'none'; // Show only the current video
            container.appendChild(video);
        });
    };

    loadVideos();

    const videos = container.querySelectorAll('video');

    // Function to scroll to the next video
    const scrollToVideo = (index) => {
        if (index >= 0 && index < videos.length) {
            videos[currentIndex].style.display = 'none'; // Hide the current video
            currentIndex = index;
            videos[currentIndex].style.display = 'block'; // Show the new video
            videos[currentIndex].play(); // Start playing the new video
        }
    };

    // Handle scrolling
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = (event) => {
        if (isScrolling) return;

        isScrolling = true;
        clearTimeout(scrollTimeout);

        // Determine scroll direction
        const delta = event.deltaY;

        if (delta > 0) {
            // Scroll down
            scrollToVideo(currentIndex + 1);
        } else if (delta < 0) {
            // Scroll up
            scrollToVideo(currentIndex - 1);
        }

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 500); // Adjust this timeout to control the scroll speed
    };

    // Add scroll event listener
    container.addEventListener('wheel', handleScroll);

    // Initial setup
    videos[currentIndex].play();
});
