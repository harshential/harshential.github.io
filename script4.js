document.addEventListener('DOMContentLoaded', function() {
    // Setup an object containing info related to each individual
    const infoMap = {
        'Brittany.jpeg': 'Harsh Prasad: Detail about Harsh Prasad here...',
        'pembroke-welsh-corgi.jpg': 'Person 2: Detail about Person 2 here...',
        'welsh-springer-spaniel.jpg': 'Person 3: Detail about Person 3 here...',
        'Yorkshire%20terrier.jpeg': 'Person 4: Detail about Person 4 here...'
    };

    // Select all images within the sidebar
    const images = document.querySelectorAll('.sidebar img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Retrieve info based on the image src attribute
            const info = infoMap[img.getAttribute('src')] || 'No information available.';
            displayInfo(info);
        });
    });

    // Function to display information
    function displayInfo(info) {
        // If the info display div doesn't exist, create it
        let infoDisplay = document.getElementById('infoDisplay');
        if (!infoDisplay) {
            infoDisplay = document.createElement('div');
            infoDisplay.id = 'infoDisplay';
            infoDisplay.className = 'info-display';
            document.querySelector('.sidebar').appendChild(infoDisplay);
        }
        // Update the content of the info display div
        infoDisplay.textContent = info;
    }
});
